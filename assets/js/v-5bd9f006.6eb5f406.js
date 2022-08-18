"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[359],{8527:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-5bd9f006",path:"/docs/configuration/authentifications/jwt.html",title:"JWT",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Configuration File",slug:"configuration-file",children:[]},{level:2,title:"Environment Variable",slug:"environment-variable",children:[]}],filePathRelative:"docs/configuration/authentifications/jwt.md",git:{updatedTime:1660827399e3,contributors:[{name:"Thomas",email:"12407096+thomas-chauvet@users.noreply.github.com",commits:1}]}}},8571:(n,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=a(6252);const t=(0,s.uE)('<h1 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h1><p>AKHQ uses signed JWT tokens to perform authentication.</p><p>Please generate a secret that is at least 256 bits.</p><p>You can use one of the following methods to provide the generated secret to AKHQ.</p><h2 id="configuration-file" tabindex="-1"><a class="header-anchor" href="#configuration-file" aria-hidden="true">#</a> Configuration File</h2><p>Provide the generated secret via the AKHQ <code>application.yml</code> via the following directive:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">token</span><span class="token punctuation">:</span>\n      <span class="token key atrule">jwt</span><span class="token punctuation">:</span>\n        <span class="token key atrule">signatures</span><span class="token punctuation">:</span>\n          <span class="token key atrule">secret</span><span class="token punctuation">:</span>\n            <span class="token key atrule">generator</span><span class="token punctuation">:</span>\n              <span class="token key atrule">secret</span><span class="token punctuation">:</span> &lt;your secret here<span class="token punctuation">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="environment-variable" tabindex="-1"><a class="header-anchor" href="#environment-variable" aria-hidden="true">#</a> Environment Variable</h2>',8),r=(0,s.Uk)("Provide the generated secret via "),i={href:"https://docs.micronaut.io/latest/guide/index.html#_property_value_binding",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("Micronaut Property Value Binding"),l=(0,s.Uk)(" using the following environment variable for the execution environment of AKHQ:"),p=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">MICRONAUT_SECURITY_TOKEN_JWT_SIGNATURES_SECRET_GENERATOR_SECRET</span><span class="token operator">=</span><span class="token string">&quot;&lt;your secret here&gt;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),c={},u=(0,a(3744).Z)(c,[["render",function(n,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[r,(0,s._)("a",i,[o,(0,s.Wm)(a)]),l]),p],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);