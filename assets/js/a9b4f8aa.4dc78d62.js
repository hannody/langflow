"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4931],{94782:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>l,assets:()=>d,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(74848),s=n(28453),r=n(24754);const i={title:"Quickstart",slug:"/get-started-quickstart"},c=void 0,a={id:"Get-Started/get-started-quickstart",title:"Quickstart",description:"Get to know Langflow by building an OpenAI-powered chatbot application. After you've constructed a chatbot, add Retrieval Augmented Generation (RAG) to chat with your own data.",source:"@site/docs/Get-Started/get-started-quickstart.md",sourceDirName:"Get-Started",slug:"/get-started-quickstart",permalink:"/get-started-quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Quickstart",slug:"/get-started-quickstart"},sidebar:"docs",previous:{title:"Install Langflow",permalink:"/get-started-installation"},next:{title:"Basic Prompting",permalink:"/starter-projects-basic-prompting"}},d={},l={annotations:r.hk,Code:r.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and start a new project",id:"open-langflow-and-start-a-new-project",level:2},{value:"Build the basic prompting flow",id:"build-the-basic-prompting-flow",level:2},{value:"Run the Basic Prompting flow",id:"run-basic-prompting-flow",level:3},{value:"Add vector RAG to your application",id:"add-vector-rag-to-your-application",level:2},{value:"Add vector RAG with the Astra DB component",id:"add-vector-rag-with-the-astra-db-component",level:2},{value:"Run the chatbot with retrieved context",id:"run-the-chatbot-with-retrieved-context",level:3},{value:"Next steps",id:"next-steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return l||x("CH",!1),l.Code||x("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(t.p,{children:"Get to know Langflow by building an OpenAI-powered chatbot application. After you've constructed a chatbot, add Retrieval Augmented Generation (RAG) to chat with your own data."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://platform.openai.com/",children:"An OpenAI API key"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://docs.datastax.com/en/astra-db-serverless/get-started/quickstart.html",children:"An Astra DB vector database"}),"\xa0with:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"AstraDB application token"}),"\n",(0,o.jsx)(t.li,{children:"API endpoint"}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.datastax.com/en/astra-db-serverless/databases/manage-collections.html#create-collection",children:"A collection in Astra"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"open-langflow-and-start-a-new-project",children:"Open Langflow and start a new project"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,o.jsx)(t.strong,{children:"New Flow"}),", and then select ",(0,o.jsx)(t.strong,{children:"Blank Flow"}),". A blank workspace opens where you can build your flow."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you don't want to create a blank flow, click ",(0,o.jsx)(t.strong,{children:"New Flow"}),", and then select ",(0,o.jsx)(t.strong,{children:"Basic Prompting"})," for a pre-built flow.\nContinue to ",(0,o.jsx)(t.a,{href:"#run-basic-prompting-flow",children:"Run the basic prompting flow"}),"."]})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select\xa0",(0,o.jsx)(t.strong,{children:"Basic Prompting"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"Basic Prompting"}),"\xa0flow is created."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"build-the-basic-prompting-flow",children:"Build the basic prompting flow"}),"\n",(0,o.jsx)(t.p,{children:"The Basic Prompting flow will look like this when it's completed:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(90567).A+"",width:"2486",height:"1534"})}),"\n",(0,o.jsxs)(t.p,{children:["To build the ",(0,o.jsx)(t.strong,{children:"Basic Prompting"})," flow, follow these steps:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Inputs"}),", select the ",(0,o.jsx)(t.strong,{children:"Chat Input"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-io#chat-input",children:"Chat Input"})," component accepts user input to the chat."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Prompt"}),", select the ",(0,o.jsx)(t.strong,{children:"Prompt"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-prompts",children:"Prompt"})," component combines the user input with a user-defined prompt."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Outputs"}),", select the ",(0,o.jsx)(t.strong,{children:"Chat Output"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-io#chat-output",children:"Chat Output"})," component prints the flow's output to the chat."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Models"}),", select the ",(0,o.jsx)(t.strong,{children:"OpenAI"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"components-models#openai",children:"OpenAI"})," model component sends the user input and prompt to the OpenAI API and receives a response."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You should now have a flow that looks like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(32358).A+"",width:"2440",height:"1548"})}),"\n",(0,o.jsxs)(t.p,{children:["With no connections between them, the components won't interact with each other.\nYou want data to flow from ",(0,o.jsx)(t.strong,{children:"Chat Input"})," to ",(0,o.jsx)(t.strong,{children:"Chat Output"})," via the connectors between the components.\nEach component accepts inputs on its left side, and sends outputs on its right side.\nHover over the connection ports to see the data types that the component accepts.\nFor more on component inputs and outputs, see ",(0,o.jsx)(t.a,{href:"/components-overview",children:"Components overview"}),"."]}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["To connect the ",(0,o.jsx)(t.strong,{children:"Chat Input"})," component to the OpenAI model component, click and drag a line from the blue ",(0,o.jsx)(t.strong,{children:"Message"})," port to the OpenAI model component's ",(0,o.jsx)(t.strong,{children:"Input"})," port."]}),"\n",(0,o.jsxs)(t.li,{children:["To connect the ",(0,o.jsx)(t.strong,{children:"Prompt"})," component to the OpenAI model component, click and drag a line from the blue ",(0,o.jsx)(t.strong,{children:"Prompt Message"})," port to the OpenAI model component's ",(0,o.jsx)(t.strong,{children:"System Message"})," port."]}),"\n",(0,o.jsxs)(t.li,{children:["To connect the ",(0,o.jsx)(t.strong,{children:"OpenAI"})," model component to the ",(0,o.jsx)(t.strong,{children:"Chat Output"}),", click and drag a line from the blue ",(0,o.jsx)(t.strong,{children:"Text"})," port to the ",(0,o.jsx)(t.strong,{children:"Chat Output"})," component's ",(0,o.jsx)(t.strong,{children:"Text"})," port."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Your finished basic prompting flow should look like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(90567).A+"",width:"2486",height:"1534"})}),"\n",(0,o.jsx)(t.h3,{id:"run-basic-prompting-flow",children:"Run the Basic Prompting flow"}),"\n",(0,o.jsx)(t.p,{children:"Add your OpenAI API key to the OpenAI model component, and add a prompt to the Prompt component to instruct the model how to respond."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Add your credentials to the OpenAI component. The fastest way to complete these fields is with Langflow\u2019s ",(0,o.jsx)(t.a,{href:"/configuration-global-variables",children:"Global Variables"}),"."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["In the OpenAI component\u2019s OpenAI API Key field, click the language Globe icon, and then click ",(0,o.jsx)(t.strong,{children:"Add New Variable"}),".\nAlternatively, click your username in the top right corner, and then click ",(0,o.jsx)(t.strong,{children:"Settings"}),", ",(0,o.jsx)(t.strong,{children:"Global Variables"}),", and then ",(0,o.jsx)(t.strong,{children:"Add New"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Name your variable. Paste your OpenAI API key (sk-\u2026\u200b) in the Value field."}),"\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"Apply To Fields"})," field, select the OpenAI API Key field to apply this variable to all OpenAI Embeddings components."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["To add a prompt to the ",(0,o.jsx)(t.strong,{children:"Prompt"})," component, click the ",(0,o.jsx)(t.strong,{children:"Template"})," field, and then enter your prompt.\nThe prompt guides the bot's responses to input.\nIf you're unsure, use ",(0,o.jsx)(t.code,{children:"Answer the user as if you were a GenAI expert, enthusiastic about helping them get started building something fresh."})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Playground"})," to start a chat session."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Enter a query, and then make sure the bot responds according to the prompt you set in the ",(0,o.jsx)(t.strong,{children:"Prompt"})," component."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You have successfully created a chatbot application using OpenAI in the Langflow Workspace."}),"\n",(0,o.jsx)(t.h2,{id:"add-vector-rag-to-your-application",children:"Add vector RAG to your application"}),"\n",(0,o.jsx)(t.p,{children:"You created a chatbot application with Langflow, but let's try an experiment."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Ask the bot: ",(0,o.jsx)(t.code,{children:"Who won the Oscar in 2024 for best movie?"})]}),"\n",(0,o.jsx)(t.li,{children:"The bot's response is similar to this:"}),"\n"]}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"I'm sorry, but I don't have information on events or awards that occurred after",props:{}}]},{tokens:[{content:"October 2023, including the Oscars in 2024.",props:{}}]},{tokens:[{content:"You may want to check the latest news or the official Oscars website",props:{}}]},{tokens:[{content:"for the most current information.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(t.p,{children:["Well, that's unfortunate, but you can load more up-to-date data with ",(0,o.jsx)(t.strong,{children:"Retrieval Augmented Generation"}),", or ",(0,o.jsx)(t.strong,{children:"RAG"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Vector RAG allows you to load your own data and chat with it, unlocking a wider range of possibilities for your chatbot application."}),"\n",(0,o.jsx)(t.h2,{id:"add-vector-rag-with-the-astra-db-component",children:"Add vector RAG with the Astra DB component"}),"\n",(0,o.jsxs)(t.p,{children:["Build on the basic prompting flow and add vector RAG to your chatbot application with the ",(0,o.jsx)(t.strong,{children:"Astra DB Vector Store"})," component."]}),"\n",(0,o.jsxs)(t.p,{children:["Add document ingestion to your basic prompting flow, with the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component as the vector store."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you don't want to create a blank flow, click ",(0,o.jsx)(t.strong,{children:"New Flow"}),", and then select ",(0,o.jsx)(t.strong,{children:"Vector RAG"})," for a pre-built flow."]})}),"\n",(0,o.jsx)(t.p,{children:"Adding vector RAG to the basic prompting flow will look like this when completed:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(69645).A+"",width:"1453",height:"659"})}),"\n",(0,o.jsx)(t.p,{children:"To build the flow, follow these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Disconnect the ",(0,o.jsx)(t.strong,{children:"Chat Input"})," component from the ",(0,o.jsx)(t.strong,{children:"OpenAI"})," component by double-clicking on the connecting line."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Vector Stores"}),", select the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-vector-stores#astra-db-vector-store",children:"Astra DB vector store"})," component connects to your ",(0,o.jsx)(t.strong,{children:"Astra DB"})," database."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Data"}),", select the ",(0,o.jsx)(t.strong,{children:"File"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-data#file",children:"File"})," component loads files from your local machine."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Processing"}),", select the ",(0,o.jsx)(t.strong,{children:"Split Text"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-processing#split-text",children:"Split Text"})," component splits the loaded text into smaller chunks."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Processing"}),", select the ",(0,o.jsx)(t.strong,{children:"Parse Data"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-processing#parse-data",children:"Parse Data"})," component converts the data from the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component into plain text."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Embeddings"}),", select the ",(0,o.jsx)(t.strong,{children:"OpenAI Embeddings"})," component, and then drag it to the canvas.\nThe ",(0,o.jsx)(t.a,{href:"/components-embedding-models#openai-embeddings",children:"OpenAI Embeddings"})," component generates embeddings for the user's input, which are compared to the vector data in the database."]}),"\n",(0,o.jsx)(t.li,{children:"Connect the new components into the existing flow, so your flow looks like this:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(69645).A+"",width:"1453",height:"659"})}),"\n",(0,o.jsxs)(t.ol,{start:"8",children:["\n",(0,o.jsxs)(t.li,{children:["Configure the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component.","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"Astra DB Application Token"})," field, add your ",(0,o.jsx)(t.strong,{children:"Astra DB"})," application token."]}),"\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"API Endpoint"})," field, add your ",(0,o.jsx)(t.strong,{children:"Astra DB"})," API endpoint. This value is found in your ",(0,o.jsx)(t.a,{href:"https://astra.datastax.com",children:"Astra DB deployment"})," and looks similar to ",(0,o.jsx)(t.code,{children:"https://ASTRA_DB_ID-ASTRA_DB_REGION.apps.astra.datastax.com"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"Collection"})," field, enter your Astra DB collection's name. Collections are created in your ",(0,o.jsx)(t.a,{href:"https://astra.datastax.com",children:"Astra DB deployment"})," for storing vector data. The collection\u2019s ",(0,o.jsx)(t.strong,{children:"Dimensions"})," value must match the dimensions of the ",(0,o.jsx)(t.strong,{children:"OpenAI Embeddings Model"}),". If you\u2019re unsure, enter ",(0,o.jsx)(t.code,{children:"1536"})," and select the ",(0,o.jsx)(t.code,{children:"text-embedding-ada-002"})," model in the OpenAI Embeddings component. For more on collections, see the ",(0,o.jsx)(t.a,{href:"https://docs.datastax.com/en/astra-db-serverless/databases/manage-collections.html#create-collection",children:"DataStax Astra DB Serverless documentation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Embedding Model"})," to bring your own embeddings model, which is the connected ",(0,o.jsx)(t.strong,{children:"OpenAI Embeddings"})," component."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you used Langflow's ",(0,o.jsx)(t.strong,{children:"Global Variables"})," feature, the RAG application flow components are already configured with the necessary credentials."]}),"\n",(0,o.jsx)(t.h3,{id:"run-the-chatbot-with-retrieved-context",children:"Run the chatbot with retrieved context"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Modify the ",(0,o.jsx)(t.strong,{children:"Prompt"})," component to contain variables for both ",(0,o.jsx)(t.code,{children:"{user_question}"})," and ",(0,o.jsx)(t.code,{children:"{context}"}),".\nThe ",(0,o.jsx)(t.code,{children:"{context}"})," variable gives the bot additional context for answering ",(0,o.jsx)(t.code,{children:"{user_question}"})," beyond what the LLM was trained on."]}),"\n"]}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Given the context",props:{}}]},{tokens:[{content:"{context}",props:{}}]},{tokens:[{content:"Answer the question",props:{}}]},{tokens:[{content:"{user_question}",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"File"})," component, upload a text file from your local machine with data you want to ingest into the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component database.\nThis example uploads an up-to-date CSV about Oscar winners."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Playground"})," to start a chat session."]}),"\n",(0,o.jsxs)(t.li,{children:["Ask the bot: ",(0,o.jsx)(t.code,{children:"Who won the Oscar in 2024 for best movie?"})]}),"\n",(0,o.jsx)(t.li,{children:"The bot's response should be similar to this:"}),"\n"]}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:'The Oscar for Best Picture in 2024 was awarded to "Oppenheimer,"',props:{}}]},{tokens:[{content:"produced by Emma Thomas, Charles Roven, and Christopher Nolan.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(t.p,{children:["Adding an ",(0,o.jsx)(t.strong,{children:"Astra DB"})," vector store brought your chatbot all the way into 2024.\nYou have successfully added RAG to your chatbot application using the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component."]}),"\n",(0,o.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(t.p,{children:"This example used movie data, but the RAG pattern can be used with any data you want to load and chat with."}),"\n",(0,o.jsxs)(t.p,{children:["Make the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," database the brain that ",(0,o.jsx)(t.a,{href:"/agents-overview",children:"Agents"})," use to make decisions."]}),"\n",(0,o.jsxs)(t.p,{children:["Expose this flow as an ",(0,o.jsx)(t.a,{href:"/workspace-api",children:"API"})," and call it from your external applications."]}),"\n",(0,o.jsxs)(t.p,{children:["For more on the ",(0,o.jsx)(t.strong,{children:"Astra DB"})," component, see ",(0,o.jsx)(t.a,{href:"/components-vector-stores#astra-db-vector-store",children:"Astra DB vector store"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},69645:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/quickstart-add-document-ingestion-f56698cb430d093e8de22c44e889668e.png"},32358:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/quickstart-basic-prompt-no-connections-890ddb68578d3202095ac450e9620878.png"},90567:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/starter-flow-basic-prompting-08b0a690bdd14de3c9843fe835d8e3cc.png"}}]);