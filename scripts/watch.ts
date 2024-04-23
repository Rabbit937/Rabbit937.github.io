import chokidar from 'chokidar'
import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();


const docsFolder = path.join(__dirname, '../', 'docs')
console.log(docsFolder)

// 监控文件夹
const watcher = chokidar.watch(docsFolder, {
    ignored: /(^|[\/\\])\../, // 忽略隐藏文件
    persistent: true,
    ignoreInitial: true, // 忽略初始扫描
});

// 监听文件变化事件
watcher.on('add', (path, event) => {
    console.log(`File ${path} has been ${event}`);
    console.log('Restarting server...');
    // 在这里执行重启服务的命令，比如 VitePress 的启动命令

    if (path.endsWith('.md')) {

        chokidar.watch(path, {
            ignored: /(^|[\/\\])\../, // 忽略隐藏文件
            persistent: true,
            ignoreInitial: true, // 
        }).on('change', (path, event) => {
            // 读取 Markdown 文件内容
            const fileContent = fs.readFileSync(path, 'utf-8');
            console.log(fileContent)
            // 使用 markdown-it 解析 Markdown 文件内容
            const tokens = md.parse(fileContent, {});
            console.log(tokens)

            // 定义 VitePress 显示内容的标识
            const vitepressContentIdentifier = '#';

            // 判断文件内容中是否包含 VitePress 显示内容
            const hasVitePressContent = tokens.some(token => {
                return (token.type === 'heading_open' && token.markup.includes(vitepressContentIdentifier));
            });

            const hasVitePressContent2 = tokens.some(token => {
                return (token.type === 'heading_open' && token.markup.includes(vitepressContentIdentifier)) && (token.type === 'inline' && token.content.length > 0);
            });

            if (hasVitePressContent) {
                console.log('Markdown 文件包含 VitePress 显示内容。');
                const childProcess = spawn('pnpm', ['run', 'dev']);

                // 监听子进程的输出
                childProcess.stdout.on('data', data => {
                    console.log(`stdout: ${data}`);
                });

                childProcess.stderr.on('data', data => {
                    console.error(`stderr: ${data}`);
                });

                // 监听子进程的退出事件
                childProcess.on('close', code => {
                    console.log(`child process exited with code ${code}`);
                });
            } else {
                console.log('Markdown 文件不包含 VitePress 显示内容。');
            }
        })
    }

});



