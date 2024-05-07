import{a as p,_ as K,j as a,e as T}from"./useTheme-ed20be1d.js";import{m as Q}from"./makeStyles-e494f9a4.js";import{_ as P}from"./extends-98964cd2.js";import{r as s}from"./index-f2bd0723.js";import"./index-e297e3bd.js";import{w as ee,c as h,a as f}from"./capitalize-6c71ac81.js";import{B as re}from"./ButtonBase-bbb043b6.js";import{c as ie}from"./createSvgIcon-e57f0ca4.js";import"./_commonjsHelpers-042e6b4d.js";import"./assertThisInitialized-e784747a.js";import"./index-0a26bc51.js";import"./TransitionGroupContext-06ba0be2.js";import"./useIsFocusVisible-bfbe563c.js";var le=function(e){return{root:P({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:p(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:p(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:p(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat(e.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(p(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:p(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(p(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:p(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},se=s.forwardRef(function(e,r){var i=e.children,n=e.classes,u=e.className,y=e.color,m=y===void 0?"default":y,z=e.component,C=z===void 0?"button":z,g=e.disabled,R=g===void 0?!1:g,v=e.disableElevation,B=v===void 0?!1:v,S=e.disableFocusRipple,V=S===void 0?!1:S,I=e.endIcon,b=e.focusVisibleClassName,E=e.fullWidth,x=E===void 0?!1:E,k=e.size,c=k===void 0?"medium":k,w=e.startIcon,q=e.type,ae=q===void 0?"button":q,L=e.variant,N=L===void 0?"text":L,te=K(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),ne=w&&s.createElement("span",{className:h(n.startIcon,n["iconSize".concat(f(c))])},w),oe=I&&s.createElement("span",{className:h(n.endIcon,n["iconSize".concat(f(c))])},I);return s.createElement(re,P({className:h(n.root,n[N],u,m==="inherit"?n.colorInherit:m!=="default"&&n["".concat(N).concat(f(m))],c!=="medium"&&[n["".concat(N,"Size").concat(f(c))],n["size".concat(f(c))]],B&&n.disableElevation,R&&n.disabled,x&&n.fullWidth),component:C,disabled:R,focusRipple:!V,focusVisibleClassName:h(n.focusVisible,b),ref:r,type:ae},te),s.createElement("span",{className:n.label},ne,i,oe))});const ce=ee(le,{name:"MuiButton"})(se);var d=44,de=function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},pe=s.forwardRef(function(e,r){var i=e.classes,n=e.className,u=e.color,y=u===void 0?"primary":u,m=e.disableShrink,z=m===void 0?!1:m,C=e.size,g=C===void 0?40:C,R=e.style,v=e.thickness,B=v===void 0?3.6:v,S=e.value,V=S===void 0?0:S,I=e.variant,b=I===void 0?"indeterminate":I,E=K(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},k={},c={};if(b==="determinate"||b==="static"){var w=2*Math.PI*((d-B)/2);x.strokeDasharray=w.toFixed(3),c["aria-valuenow"]=Math.round(V),x.strokeDashoffset="".concat(((100-V)/100*w).toFixed(3),"px"),k.transform="rotate(-90deg)"}return s.createElement("div",P({className:h(i.root,n,y!=="inherit"&&i["color".concat(f(y))],{determinate:i.determinate,indeterminate:i.indeterminate,static:i.static}[b]),style:P({width:g,height:g},k,R),ref:r,role:"progressbar"},c,E),s.createElement("svg",{className:i.svg,viewBox:"".concat(d/2," ").concat(d/2," ").concat(d," ").concat(d)},s.createElement("circle",{className:h(i.circle,z&&i.circleDisableShrink,{determinate:i.circleDeterminate,indeterminate:i.circleIndeterminate,static:i.circleStatic}[b]),style:x,cx:d,cy:d,r:(d-B)/2,fill:"none",strokeWidth:B})))});const ue=ee(de,{name:"MuiCircularProgress",flip:!1})(pe),me=Q(o=>({root:{padding:({size:e,startIcon:r,endIcon:i})=>{if(r||i)switch(e){case"large":return o.spacing(0,2);default:return o.spacing(0,1.4)}else switch(e){case"small":return o.spacing(0,1.4);case"large":return o.spacing(0,3.5);default:return o.spacing(0,2)}},background:({variant:e,disabled:r})=>e==="gradient"&&!r?"linear-gradient(272.58deg, #7879F1 1.06%, #7879F1 33.24%, #5D5FEF 56.4%)":""}})),be=Q(o=>({label:{fontWeight:400,color:o.palette.grey[900]},text:{"& + &":{marginLeft:o.spacing(1)},backgroundColor:({selected:e})=>e?o.palette.grey[300]:"transparent","&:hover":{borderColor:o.palette.grey[300],backgroundColor:({selected:e})=>e?o.palette.grey[300]:"transparent"}}})),t=o=>{const{variant:e,showSpinner:r,...i}=o,n=i;n.classes=me(o);const u=be(o);switch(e){case"primary":case"gradient":n.variant="contained";break;case"secondary":n.variant="outlined";break;case"ghost":n.variant="text";break;case"pill":n.variant="text",n.classes={...n.classes,...u};break}return r&&(n.startIcon=a(ue,{size:16,color:"primary",thickness:5})),a(ce,{...n})};try{t.displayName="YBButton",t.__docgenInfo={description:"",displayName:"YBButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'},{value:'"gradient"'},{value:'"pill"'}]}},showSpinner:{defaultValue:null,description:"",name:"showSpinner",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the button.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:`The content of the button.
The content of the component.`,name:"children",required:!1,type:{name:"(((boolean | ReactChild | ReactFragment | ReactPortal) & (string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray | ReactPortal | Iterable<...>)) & (boolean | ... 2 more ... | ReactPortal)) | null"}},fullWidth:{defaultValue:null,description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the button will be disabled.\nIf `true`, the base button will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:null,description:"If `true`, the  keyboard focus ripple will be disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},buttonRef:{defaultValue:null,description:"@ignore Use that prop to pass a ref to the native button component.\n@deprecated Use `ref` instead.",name:"buttonRef",required:!1,type:{name:"Ref<unknown>"}},centerRipple:{defaultValue:null,description:"If `true`, the ripples will be centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:null,description:"If `true`, the ripple effect will be disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `focusVisibleClassName`.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:null,description:"If `true`, the touch ripple effect will be disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:null,description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},disableElevation:{defaultValue:null,description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}}}}}catch{}const l=ie(s.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})),Ce={title:"Components/YBButton",component:t,tags:["autodocs"],parameters:{controls:{exclude:["action","focusVisibleClassName","onFocusVisible","ref","tabIndex","TouchRippleProps","children","startIcon","endIcon"],sort:"alpha"}},argTypes:{size:{options:["small","medium","large"]},variant:{options:["primary","secondary","ghost","gradient","pill"]}},args:{disabled:!1}},Y=({startIcon:o,endIcon:e,...r})=>T("div",{children:[a(t,{...r,children:"Default"}),a("p",{}),a(t,{...r,startIcon:a(l,{}),children:"Start Icon"}),a("p",{}),a(t,{...r,endIcon:a(l,{}),children:"End Icon"}),a("p",{}),a(t,{...r,startIcon:a(l,{}),endIcon:a(l,{}),children:"Both Icons"}),a("p",{}),a(t,{...r,size:"small",children:"Small size"}),a("p",{}),a(t,{...r,disabled:!0,children:"Disabled"}),a("p",{}),a(t,{...r,disabled:!0,showSpinner:!0,children:"Loading"})]});Y.args={variant:"primary",size:"medium"};const D=()=>T("div",{children:[a(t,{variant:"primary",children:"Default"}),a("p",{}),a(t,{variant:"primary",startIcon:a(l,{}),children:"Start Icon"}),a("p",{}),a(t,{variant:"primary",endIcon:a(l,{}),children:"End Icon"}),a("p",{}),a(t,{variant:"primary",startIcon:a(l,{}),endIcon:a(l,{}),children:"Both Icons"}),a("p",{}),a(t,{variant:"primary",size:"small",children:"Small size"}),a("p",{}),a(t,{variant:"primary",disabled:!0,children:"Disabled"}),a("p",{}),a(t,{variant:"primary",disabled:!0,showSpinner:!0,children:"Loading"})]}),$=()=>T("div",{children:[a(t,{variant:"secondary",children:"Default"}),a("p",{}),a(t,{variant:"secondary",startIcon:a(l,{}),children:"Start Icon"}),a("p",{}),a(t,{variant:"secondary",endIcon:a(l,{}),children:"End Icon"}),a("p",{}),a(t,{variant:"secondary",startIcon:a(l,{}),endIcon:a(l,{}),children:"Both Icons"}),a("p",{}),a(t,{variant:"secondary",size:"small",children:"Small size"}),a("p",{}),a(t,{variant:"secondary",disabled:!0,children:"Disabled"}),a("p",{}),a(t,{variant:"secondary",disabled:!0,showSpinner:!0,children:"Loading"})]}),_=()=>T("div",{children:[a(t,{variant:"ghost",children:"Default"}),a("p",{}),a(t,{variant:"ghost",startIcon:a(l,{}),children:"Start Icon"}),a("p",{}),a(t,{variant:"ghost",endIcon:a(l,{}),children:"End Icon"}),a("p",{}),a(t,{variant:"ghost",startIcon:a(l,{}),endIcon:a(l,{}),children:"Both Icons"}),a("p",{}),a(t,{variant:"ghost",size:"small",children:"Small size"}),a("p",{}),a(t,{variant:"ghost",disabled:!0,children:"Disabled"}),a("p",{}),a(t,{variant:"ghost",disabled:!0,showSpinner:!0,children:"Loading"})]});var F,W,M;Y.parameters={...Y.parameters,docs:{...(F=Y.parameters)==null?void 0:F.docs,source:{originalSource:`({
  startIcon,
  endIcon,
  ...args
}: any) => <div>
    <YBButton {...args}>Default</YBButton>
    <p />
    <YBButton {...args} startIcon={<Settings />}>
      Start Icon
    </YBButton>
    <p />
    <YBButton {...args} endIcon={<Settings />}>
      End Icon
    </YBButton>
    <p />
    <YBButton {...args} startIcon={<Settings />} endIcon={<Settings />}>
      Both Icons
    </YBButton>
    <p />
    <YBButton {...args} size="small">
      Small size
    </YBButton>
    <p />
    <YBButton {...args} disabled>
      Disabled
    </YBButton>
    <p />
    <YBButton {...args} disabled showSpinner>
      Loading
    </YBButton>
  </div>`,...(M=(W=Y.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var O,j,A;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div>
    <YBButton variant="primary">Default</YBButton>
    <p />
    <YBButton variant="primary" startIcon={<Settings />}>
      Start Icon
    </YBButton>
    <p />
    <YBButton variant="primary" endIcon={<Settings />}>
      End Icon
    </YBButton>
    <p />
    <YBButton variant="primary" startIcon={<Settings />} endIcon={<Settings />}>
      Both Icons
    </YBButton>
    <p />
    <YBButton variant="primary" size="small">
      Small size
    </YBButton>
    <p />
    <YBButton variant="primary" disabled>
      Disabled
    </YBButton>
    <p />
    <YBButton variant="primary" disabled showSpinner>
      Loading
    </YBButton>
  </div>`,...(A=(j=D.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var G,H,U;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div>
    <YBButton variant="secondary">Default</YBButton>
    <p />
    <YBButton variant="secondary" startIcon={<Settings />}>
      Start Icon
    </YBButton>
    <p />
    <YBButton variant="secondary" endIcon={<Settings />}>
      End Icon
    </YBButton>
    <p />
    <YBButton variant="secondary" startIcon={<Settings />} endIcon={<Settings />}>
      Both Icons
    </YBButton>
    <p />
    <YBButton variant="secondary" size="small">
      Small size
    </YBButton>
    <p />
    <YBButton variant="secondary" disabled>
      Disabled
    </YBButton>
    <p />
    <YBButton variant="secondary" disabled showSpinner>
      Loading
    </YBButton>
  </div>`,...(U=(H=$.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var J,X,Z;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div>
    <YBButton variant="ghost">Default</YBButton>
    <p />
    <YBButton variant="ghost" startIcon={<Settings />}>
      Start Icon
    </YBButton>
    <p />
    <YBButton variant="ghost" endIcon={<Settings />}>
      End Icon
    </YBButton>
    <p />
    <YBButton variant="ghost" startIcon={<Settings />} endIcon={<Settings />}>
      Both Icons
    </YBButton>
    <p />
    <YBButton variant="ghost" size="small">
      Small size
    </YBButton>
    <p />
    <YBButton variant="ghost" disabled>
      Disabled
    </YBButton>
    <p />
    <YBButton variant="ghost" disabled showSpinner>
      Loading
    </YBButton>
  </div>`,...(Z=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Re=["InteractiveButton","Primary","Secondary","Ghost"];export{_ as Ghost,Y as InteractiveButton,D as Primary,$ as Secondary,Re as __namedExportsOrder,Ce as default};
//# sourceMappingURL=YBButton.stories-2de70a51.js.map
