import{w as ln,c as G}from"./path-39bad7e2.CbwjOpE9.js";import{ax as an,ay as Z,az as D,aA as rn,aB as y,Z as on,aC as J,aD as _,aE as un,aF as t,aG as sn,aH as tn,aI as fn}from"./theme.D1qstnkW.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,E,v,A,H,a){var z=q-l,i=E-h,n=H-v,m=a-A,r=m*z-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*z,h+r*i]}function U(l,h,q,E,v,A,H){var a=l-q,z=h-E,i=(H?A:-A)/J(a*a+z*z),n=i*z,m=-i*a,r=l+n,s=h+m,f=q+n,c=E+m,O=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,B=(g<0?-1:1)*J(fn(0,T*T*R-P*P)),C=(P*g-p*B)/R,F=(-P*p-g*B)/R,w=(P*g+p*B)/R,d=(-P*p+g*B)/R,x=C-O,e=F-o,u=w-O,S=d-o;return x*x+e*e>u*u+S*S&&(C=w,F=d),{cx:C,cy:F,x01:-n,y01:-m,x11:C*(v/T-1),y11:F*(v/T-1)}}function vn(){var l=cn,h=yn,q=G(0),E=null,v=gn,A=mn,H=pn,a=null,z=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,O=un(c-f),o=c>f;if(a||(a=n=z()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(O>on-y)a.moveTo(s*Z(f),s*D(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*Z(c),r*D(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=O,B=O,C=H.apply(this,arguments)/2,F=C>y&&(E?+E.apply(this,arguments):J(r*r+s*s)),w=_(un(s-r)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(F>y){var S=sn(F/r*D(C)),K=sn(F/s*D(C));(P-=S*2)>y?(S*=o?1:-1,R+=S,T-=S):(P=0,R=T=(f+c)/2),(B-=K*2)>y?(K*=o?1:-1,p+=K,g-=K):(B=0,p=g=(f+c)/2)}var $=s*Z(p),j=s*D(p),L=r*Z(T),M=r*D(T);if(w>y){var N=s*Z(g),Q=s*D(g),V=r*Z(R),W=r*D(R),I;if(O<an)if(I=dn($,j,V,W,N,Q,L,M)){var X=$-I[0],Y=j-I[1],k=N-I[0],b=Q-I[1],nn=1/D(tn((X*k+Y*b)/(J(X*X+Y*Y)*J(k*k+b*b)))/2),en=J(I[0]*I[0]+I[1]*I[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}B>y?x>y?(e=U(V,W,$,j,s,x,o),u=U(N,Q,L,M,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo($,j),a.arc(0,0,s,p,g,!o)):a.moveTo($,j),!(r>y)||!(P>y)?a.lineTo(L,M):d>y?(e=U(L,M,N,Q,r,-d,o),u=U($,j,V,W,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[Z(m)*n,D(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:G(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:G(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:G(+n),i):q},i.padRadius=function(n){return arguments.length?(E=n==null?null:typeof n=="function"?n:G(+n),i):E},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:G(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:G(+n),i):A},i.padAngle=function(n){return arguments.length?(H=typeof n=="function"?n:G(+n),i):H},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as d};
