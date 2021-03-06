//This is the concentic circles that want on your radar
var radar_arcs = [
  {'r': 100,'name': 'Adopt'}, 
  {'r': 200,'name': 'Trial'}, 
  {'r': 300,'name': 'Assess'}, 
  {'r': 400,'name': 'Hold'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
  {
    "quadrant": "Languages and Frameworks", // t 90-180
    "left": 45,
    "top": 18,
    "color": "#00A499",
    "items": [
        //  Adopt
        {pc: {r:  45, t: 100}, movement: "c", name: "Angular"},
        {pc: {r:  68, t: 160}, movement: "c", name: "TypeScript"}, 
        {pc: {r:  83, t: 119}, movement: "c", name: "Gulp"},  
        {pc: {r:  92, t: 155}, movement: "t", name: "Kotlin"},          

        //  Trial
        {pc: {r: 140, t: 115}, movement: "c", name: ".NET Core", docname: "dotnet-core"}, 
        {pc: {r: 158, t: 117}, movement: "c", name: "Yarn",},
        {pc: {r: 162, t: 167}, movement: "c", name: "Webpack",},
        {pc: {r: 167, t: 144}, movement: "c", name: "SharePoint framework", docname: "sharepoint-framework"},  
        {pc: {r: 175, t: 159}, movement: "t", name: "TestCafe",},
        {pc: {r: 189, t: 137}, movement: "c", name: "Cake (C# Make)", docname:"cake"},        
        {pc: {r: 194, t: 167}, movement: "c", name: "Browser Sync", docname: "browser-sync"},

        //  Assess
        {pc: {r: 222, t: 109}, movement: "c", name: "React + Redux", docname: "react"},
        {pc: {r: 237, t: 104}, movement: "c", name: "Vue.js", docname: "vue"},
        {pc: {r: 259, t: 132}, movement: "c", name: "Python"},
        {pc: {r: 268, t: 162}, movement: "c", name: "Symfony"},      
        {pc: {r: 278, t: 127}, movement: "c", name: "Grails",},
        {pc: {r: 280, t: 120}, movement: "c", name: "Spark", docname: "spark-java"},
        {pc: {r: 289, t: 127}, movement: "c", name: "Akka",},
        
        //  Hold 
        {pc: {r: 308, t: 125}, movement: "c", name: "Scala"}, 
        {pc: {r: 332, t: 139}, movement: "c", name: "Grunt"},
        {pc: {r: 370, t: 108}, movement: "c", name: "Ruby-on-Rails",}, 
        {pc: {r: 372, t: 143}, movement: "c", name: "Play Framework", docname: "play-framework"},
        {pc: {r: 392, t: 166}, movement: "c", name: "LESS (CSS)", docname: "less-css"}, 
    ]
}, {
    "quadrant": "Platforms", // t 0-90
    "left": (w - 200 + 30),
    "top": 18,
    "color": "#CB6015",
    "items": [
        //  Adopt
        {pc: {r:  73, t:  61}, movement: "c", name: "Joomla!", docname: "joomla"},

        //  Trial
        {pc: {r: 158, t:  21}, movement: "c", name: "Azure SQL Database", docname: "azure-sqldb"}, 
        {pc: {r: 166, t:  36}, movement: "c", name: "Azure Functions", docname: "azure-functions"},
        {pc: {r: 188, t:  31}, movement: "c", name: "AWS Lambda", docname: "lambda"},

        //  Assess 
        {pc: {r: 209, t:  68}, movement: "c", name: "Powershell DSC", docname: "powershell-dsc"},
        {pc: {r: 210, t:  30}, movement: "c", name: "Native Windows Containers", docname: "docker"},
        {pc: {r: 216, t:  33}, movement: "c", name: "Azure Logic Apps", docname: "logic-apps"},
        {pc: {r: 225, t:  38}, movement: "c", name: "Cloud Foundry", docname: "cloud-foundry"}, 
        {pc: {r: 244, t:  42}, movement: "c", name: "Amazon SQS", docname: "aws-sqs"},
        {pc: {r: 247, t:  48}, movement: "c", name: "Amazon SNS", docname: "aws-sns"},
        {pc: {r: 274, t:  14}, movement: "c", name: "Azure DocumentDB", docname: "azure-documentdb"}, 
        {pc: {r: 283, t:  61}, movement: "c", name: "Drupal 8", docname: "drupal"},
        {pc: {r: 284, t:  78}, movement: "c", name: "Windows Server Nano", docname: "windows-server-nano"}, 
        {pc: {r: 285, t:   5}, movement: "c", name: "Amazon DynamoDB", docname: "aws-dynamodb"},  
        {pc: {r: 296, t:  51}, movement: "c", name: "Amazon GreenGrass", docname: "aws-greengrass"},  

        //  Hold
        {pc: {r: 318, t:  24}, movement: "c", name: "MongoDB"},  
        {pc: {r: 354, t:  78}, movement: "c", name: "Manual Windows Server Deployments", docname: "windows-server-deployments"}, 
    ]
}, {
    "quadrant": "Tools", // t 180-270
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#893CA2",
    "items": [
        //  Adopt
        {pc: {r:  65, t: 240}, movement: "c", name: "Docker"}, 
        {pc: {r:  76, t: 190}, movement: "t", name: "Axure",},

        //  Trial
        {pc: {r: 123, t: 258}, movement: "c", name: "Elastic Stack", docname: "elastic-stack"},
        {pc: {r: 139, t: 253}, movement: "c", name: "Kubernetes"},
        {pc: {r: 174, t: 262}, movement: "c", name: "3M Post-It App", docname: "3m-post-it"},
        {pc: {r: 179, t: 265}, movement: "t", name: "Realtimeboard.com", docname: "realtimeboard"}, 
        {pc: {r: 188, t: 223}, movement: "c", name: "Mural"},
        {pc: {r: 192, t: 251}, movement: "c", name: "Rancher",}, 

        //  Assess
        {pc: {r: 219, t: 245}, movement: "c", name: "Minikube"},
        {pc: {r: 228, t: 239}, movement: "c", name: "Vagrant"},
        {pc: {r: 235, t: 189}, movement: "t", name: "Adobe XD", docname: "adobe-xd"}, 
        {pc: {r: 243, t: 258}, movement: "c", name: "New Relic", docname: "new-relic"}, 
        {pc: {r: 250, t: 220}, movement: "c", name: "Spectre",}, 
        {pc: {r: 255, t: 249}, movement: "c", name: "Concourse",}, 
        {pc: {r: 259, t: 200}, movement: "c", name: "Tenon.io", docname: "tenonio"},  
        {pc: {r: 267, t: 225}, movement: "c", name: "NVivo suite", docname: "nvivo"}, 
        {pc: {r: 269, t: 190}, movement: "c", name: "LambdaCD",},
        {pc: {r: 275, t: 189}, movement: "t", name: "Adobe Creative Suite", docname: "adobe-creative-suite"}, 
        {pc: {r: 282, t: 240}, movement: "c", name: "Habitat",},
        {pc: {r: 288, t: 250}, movement: "c", name: "Terraform",},  
        {pc: {r: 291, t: 200}, movement: "c", name: "Pa11y"},

        //  Hold
        {pc: {r: 301, t: 204}, movement: "c", name: "Protractor",}, 
        {pc: {r: 329, t: 234}, movement: "c", name: "Jenkins 2.0", docname: "jenkins2"}, 
        {pc: {r: 336, t: 261}, movement: "c", name: "Chef",}, 
        {pc: {r: 345, t: 266}, movement: "c", name: "Puppet",},
        {pc: {r: 383, t: 228}, movement: "c", name: "Rocket.Chat", docname: "rocket-chat"}, 
        {pc: {r: 390, t: 230}, movement: "c", name: "Nightwatch.js", docname: "nightwatchjs"}, 
        {pc: {r: 399, t: 220}, movement: "c", name: "TFVC",}, 
    ]
}, {
    "quadrant": "Approaches", // t 270-360
    "color": "#64B044",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        //  Adopt
        {pc: {r:  64, t: 293}, movement: "c", name: "Lean UX", docname: "lean-ux"}, 
        {pc: {r:  86, t: 310}, movement: "c", name: "Build & Release Management with TFS/VSTS", docname: "build-release-management-vsts"}, 
        {pc: {r:  88, t: 286}, movement: "c", name: "Service Design"},
        
        //  Trial
        {pc: {r: 110, t: 325}, movement: "c", name: "Session-Based Testing", docname: "sbtm"}, 
        {pc: {r: 118, t: 288}, movement: "c", name: "Ethnographic Methods", docname: "ethnography"}, 
        {pc: {r: 152, t: 358}, movement: "c", name: "Micro-service architecture", docname: "microservice-architectures"}, 
        {pc: {r: 192, t: 338}, movement: "c", name: "Backend for Front-Ends", docname: "backend-for-frontends"}, 

        //  Assess 
        {pc: {r: 238, t: 305}, movement: "c", name: "CRM collaborative development without relying on TFVC", docname: "crm-collaborative-development-without-tfvc"},
        {pc: {r: 251, t: 355}, movement: "c", name: "Serverless Architectures", docname: "serverless"},
        {pc: {r: 256, t: 339}, movement: "t", name: "Lightweight Architecture Design Records", docname: "architecture-design-records"},
        {pc: {r: 278, t: 325}, movement: "c", name: "Model-Based Testing", docname: "model-based-testing"},

        //  Hold 
        {pc: {r: 358, t: 277}, movement: "c", name: "Native Mobile", docname: "native-mobile"},
    ]
}
];