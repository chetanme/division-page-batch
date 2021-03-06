# division-page-batch

A Node.js library script to easily invoke Karma in batch mode.

### Installation

You need to have [Node.js](http://nodejs.org/) installed. Then download `division-page-batch` and execute the following command in the directory where you cloned this repository. You need to do this to download additional packages.

`npm install date-format-lite sys exec-sync shred optimist request async cron time gith`

### Usage

Typical invocation: `node karma-batch.js <spec-file>`

Type `node karma-batch.js -h` to see the available options.

### Sample Specification File
You specify all the parameters to your batch processing in a JSON file.
You should put all your input files in one directory and all your model files also in one directory.

You can optionally post the generated RDF files to a SPARQL endpoint.

```
{
	karmaHome : "/home2/chetan/Web-Karma/" ,
	modelsDir : "/home2/chetan/division-page-data/model" ,
	filesDir : "/home2/chetan/division-page-data" ,
	rdfDir : "/home2/chetan/division-page-data/RDF" ,
	baseHttpDirURL : "https://raw.github.com/chetanme/division-page-data/master/" ,
	runAsCron : false ,
	cronTimeInMin : 15 ,
	endpoint : "http://localhost:8080/openrdf-sesame/repositories/division-page" ,
	clearEndpoint : false ,
	filesAndModels : [
		{
			file : "data/organization.csv" , model : "WSP1WS1-organization.csv-model.ttl"
		}
		, 
		{
			file : "data/people.csv" , model : "WSP1WS1-people.csv-model.ttl"
		}
		,
		{
			file : "data/position.csv" , model : "WSP1WS1-position.csv-model.ttl"
		}
	],
	useWebhookFlow : true,
	webhookRepoName : "chetanme/division-page-data",
	webhookBranchName : "master",
	webhookFileName : /data\/(\w+).csv/
}

```

### Caveats

- The implementation of the functions to POST the generated RDF to a triple store is very naive as it loads the whole RDF file into memory. 
    - A better implementation is welcome.
- Error checking is rudimentary.
- Does not show console output from RDF generation process. If something goes wrong you will not get a file, but will not get an error message. 
    - I don't know how to capture the output of the child process. Please let me know if you know how to do this.
