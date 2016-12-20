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
        {pc: {r:  30, t:  96}, movement: "c", name: "Spring Boot", docname:"spring-boot"}, 
        {pc: {r:  58, t: 138}, movement: "c", name: "node.js (for micro-services or simple front-ends)", docname:"nodejs"}, 
        {pc: {r:  65, t: 100}, movement: "t", name: "Angular", docname:"angular"},
        {pc: {r:  93, t: 119}, movement: "t", name: "Gulp"},  
        {pc: {r:  98, t: 160}, movement: "t", name: "TypeScript"}, 

        //  Trial
        {pc: {r: 112, t: 155}, movement: "c", name: "Kotlin"},          
        {pc: {r: 140, t: 115}, movement: "t", name: ".NET Core", docname: "dotnet-core"}, 
        {pc: {r: 167, t: 144}, movement: "t", name: "SharePoint framework", docname: "sharepoint-framework"},  
        {pc: {r: 180, t: 125}, movement: "c", name: "Scala"}, 
        {pc: {r: 189, t: 137}, movement: "c", name: "Cake (C# Make)", docname:"cake"},        
        {pc: {r: 194, t: 167}, movement: "c", name: "Browser Sync", docname: "browser-sync"},

        //  Assess
        {pc: {r: 222, t: 159}, movement: "c", name: "React + Redux", docname: "react"},
        {pc: {r: 259, t: 132}, movement: "c", name: "Python"},
        {pc: {r: 268, t: 162}, movement: "c", name: "Symfony"},
        {pc: {r: 270, t: 167}, movement: "c", name: "Thymeleaf"},
        {pc: {r: 278, t: 127}, movement: "c", name: "Grails",},
        {pc: {r: 280, t: 120}, movement: "c", name: "Spark", docname: "spark-java"},
        {pc: {r: 285, t: 159}, movement: "c", name: "TestCafe",},
        {pc: {r: 289, t: 127}, movement: "c", name: "Akka",},
        {pc: {r: 293, t: 167}, movement: "c", name: "Webpack",},
        
        //  Hold 
        {pc: {r: 332, t: 139}, movement: "c", name: "Grunt"},
        {pc: {r: 370, t: 108}, movement: "c", name: "Ruby-on-Rails",}, 
        {pc: {r: 372, t: 143}, movement: "c", name: "Play Framework", docname: "play-framework"},
        {pc: {r: 390, t:  98}, movement: "c", name: "Elixir + Phoenix", docname: "elixir"}, 
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
        {pc: {r:  93, t:  58}, movement: "c", name: "VSTS"},

        //  Trial
        {pc: {r: 158, t:  21}, movement: "c", name: "Azure SQL", docname: "azure-sqldb"}, 
        {pc: {r: 166, t:  36}, movement: "c", name: "Azure Functions", docname: "azure-functions"},
        {pc: {r: 188, t:  31}, movement: "c", name: "AWS Lambda", docname: "lambda"},

        //  Assess 
        {pc: {r: 209, t:  68}, movement: "c", name: "Powershell DSC", docname: "powershell-dsc"},
        {pc: {r: 225, t:  38}, movement: "c", name: "Cloud Foundry", docname: "cloud-foundry"}, 
        {pc: {r: 244, t:  42}, movement: "c", name: "Amazon SQS", docname: "aws-sqs"},
        {pc: {r: 247, t:  48}, movement: "c", name: "Amazon SNS", docname: "aws-sns"},
        {pc: {r: 274, t:  14}, movement: "c", name: "Azure DocumentDB", docname: "azure-documentdb"}, 
        {pc: {r: 283, t:  61}, movement: "c", name: "Drupal 8", docname: "drupal"},
        {pc: {r: 284, t:  78}, movement: "c", name: "Windows Server Nano", docname: "windows-server-nano"}, 
        {pc: {r: 285, t:   5}, movement: "c", name: "Amazon DynamoDB", docname: "aws-dynamodb"},  

        //  Hold
        {pc: {r: 318, t:  24}, movement: "t", name: "MongoDB"},  
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
        {pc: {r:  86, t: 185}, movement: "t", name: "Balsamiq",}, 

        //  Trial
        {pc: {r: 123, t: 258}, movement: "c", name: "Elastic Stack", docname: "elastic-stack"},
        {pc: {r: 140, t: 204}, movement: "c", name: "Protractor",}, 
        {pc: {r: 192, t: 251}, movement: "c", name: "Rancher",}, 

        //  Assess
        {pc: {r: 206, t: 190}, movement: "t", name: "Axure",},
        {pc: {r: 228, t: 239}, movement: "t", name: "Vagrant"},
        {pc: {r: 243, t: 258}, movement: "c", name: "New Relic", docname: "new-relic"}, 
        {pc: {r: 250, t: 220}, movement: "c", name: "Spectre",}, 
        {pc: {r: 255, t: 189}, movement: "c", name: "Concourse",}, 
        {pc: {r: 259, t: 200}, movement: "c", name: "Tenon.io", docname: "tenonio"},  
        {pc: {r: 267, t: 225}, movement: "c", name: "NVivo suite", docname: "nvivo"}, 
        {pc: {r: 269, t: 190}, movement: "c", name: "LambdaCD",},
        {pc: {r: 279, t: 253}, movement: "c", name: "Kubernetes"},
        {pc: {r: 282, t: 240}, movement: "t", name: "Habitat",},
        {pc: {r: 288, t: 250}, movement: "t", name: "Terraform",},  
        {pc: {r: 291, t: 200}, movement: "c", name: "Pa11y"},

        //  Hold
        {pc: {r: 309, t: 215}, movement: "c", name: "JIRA"}, 
        {pc: {r: 329, t: 184}, movement: "t", name: "Jenkins 2.0", docname: "jenkins2"}, 
        {pc: {r: 336, t: 261}, movement: "t", name: "Chef",}, 
        {pc: {r: 345, t: 266}, movement: "t", name: "Puppet",},
        {pc: {r: 383, t: 228}, movement: "t", name: "Rocket.Chat", docname: "rocket-chat"}, 
        {pc: {r: 390, t: 230}, movement: "t", name: "Nightwatch.js", docname: "nightwatchjs"}, 
        {pc: {r: 399, t: 220}, movement: "c", name: "TFVC",}, 
    ]
}, {
    "quadrant": "Approaches", // t 270-360
    "color": "#64B044",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        //  Adopt
        {pc: {r:  64, t: 343}, movement: "c", name: "Lean UX", docname: "lean-ux"}, 
        {pc: {r:  86, t: 300}, movement: "c", name: "Build & Release Management with TFS/VSTS", docname: "build-release-management-vsts"}, 
        {pc: {r:  88, t: 336}, movement: "c", name: "Service Design"},
        
        //  Trial
        {pc: {r: 110, t: 325}, movement: "c", name: "Session-Based Testing", docname: "sbtm"}, 
        {pc: {r: 152, t: 358}, movement: "c", name: "Micro-service architecture", docname: "microservice-architectures"}, 
        {pc: {r: 192, t: 338}, movement: "t", name: "Backend for Front-Ends", docname: "backend-for-frontends"}, 

        //  Assess 
        {pc: {r: 278, t: 325}, movement: "c", name: "Model-Based Testing", docname: "model-based-testing"},
        {pc: {r: 238, t: 345}, movement: "c", name: "CRM collaborative development without relying on TFVC", docname: "crm-collaborative-development-without-tfvc"},

        //  Hold 
        {pc: {r: 358, t: 277}, movement: "c", name: "Native Mobile", docname: "native-mobile"},
    ]
}];
