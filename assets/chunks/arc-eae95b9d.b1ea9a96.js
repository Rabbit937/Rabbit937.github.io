import{c as U,p as sn}from"./constant-b644328d.6af51708.js";import{aU as en,aV as Y,aW as b,aX as an,aY as y,a0 as ln,aZ as z,a_ as k,a$ as rn,b0 as t,b1 as un,b2 as on,b3 as tn}from"../app.888a40fe.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,w,$,h,v,V,a){var s=w-l,n=$-x,m=V-h,i=a-v,r=i*s-m*n;if(!(r*r<y))return r=(m*(x-v)-i*(l-h))/r,[l+r*s,x+r*n]}function H(l,x,w,$,h,v,V){var a=l-w,s=x-$,n=(V?v:-v)/z(a*a+s*s),m=n*s,i=-n*a,r=l+m,f=x+i,c=w+m,D=$+i,o=(r+c)/2,E=(f+D)/2,p=c-r,g=D-f,A=p*p+g*g,I=h-v,P=r*D-c*f,O=(g<0?-1:1)*z(tn(0,I*I*A-P*P)),S=(P*g-p*O)/A,d=(-P*p-g*O)/A,R=(P*g+p*O)/A,T=(-P*p+g*O)/A,e=S-o,u=d-E,W=R-o,X=T-E;return e*e+u*u>W*W+X*X&&(S=R,d=T),{cx:S,cy:d,x01:-m,y01:-i,x11:S*(h/I-1),y11:d*(h/I-1)}}function hn(){var l=fn,x=cn,w=U(0),$=null,h=yn,v=gn,V=mn,a=null;function s(){var n,m,i=+l.apply(this,arguments),r=+x.apply(this,arguments),f=h.apply(this,arguments)-an,c=v.apply(this,arguments)-an,D=rn(c-f),o=c>f;if(a||(a=n=sn()),r<i&&(m=r,r=i,i=m),!(r>y))a.moveTo(0,0);else if(D>ln-y)a.moveTo(r*Y(f),r*b(f)),a.arc(0,0,r,f,c,!o),i>y&&(a.moveTo(i*Y(c),i*b(c)),a.arc(0,0,i,c,f,o));else{var E=f,p=c,g=f,A=c,I=D,P=D,O=V.apply(this,arguments)/2,S=O>y&&($?+$.apply(this,arguments):z(i*i+r*r)),d=k(rn(r-i)/2,+w.apply(this,arguments)),R=d,T=d,e,u;if(S>y){var W=un(S/i*b(O)),X=un(S/r*b(O));(I-=W*2)>y?(W*=o?1:-1,g+=W,A-=W):(I=0,g=A=(f+c)/2),(P-=X*2)>y?(X*=o?1:-1,E+=X,p-=X):(P=0,E=p=(f+c)/2)}var Z=r*Y(E),j=r*b(E),B=i*Y(A),C=i*b(A);if(d>y){var F=r*Y(p),G=r*b(p),J=i*Y(g),K=i*b(g),q;if(D<en&&(q=pn(Z,j,J,K,F,G,B,C))){var L=Z-q[0],M=j-q[1],N=F-q[0],Q=G-q[1],_=1/b(on((L*N+M*Q)/(z(L*L+M*M)*z(N*N+Q*Q)))/2),nn=z(q[0]*q[0]+q[1]*q[1]);R=k(d,(i-nn)/(_-1)),T=k(d,(r-nn)/(_+1))}}P>y?T>y?(e=H(J,K,Z,j,r,T,o),u=H(F,G,B,C,r,T,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),T<d?a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,T,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Z,j),a.arc(0,0,r,E,p,!o)):a.moveTo(Z,j),!(i>y)||!(I>y)?a.lineTo(B,C):R>y?(e=H(B,C,F,G,i,-R,o),u=H(Z,j,J,K,i,-R,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,R,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,i,A,g,o)}if(a.closePath(),n)return a=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-en/2;return[Y(m)*n,b(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:U(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:U(+n),s):x},s.cornerRadius=function(n){return arguments.length?(w=typeof n=="function"?n:U(+n),s):w},s.padRadius=function(n){return arguments.length?($=n==null?null:typeof n=="function"?n:U(+n),s):$},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:U(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:U(+n),s):v},s.padAngle=function(n){return arguments.length?(V=typeof n=="function"?n:U(+n),s):V},s.context=function(n){return arguments.length?(a=n??null,s):a},s}export{hn as d};
