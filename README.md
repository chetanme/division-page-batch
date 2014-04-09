# division-page-batch

A Node.js library script to easily invoke Karma in batch mode.

### Installation

You need to have [Node.js](http://nodejs.org/) installed. Then download `division-page-batch` and execute the following command in the directory where you cloned this repository. You need to do this to download additional packages.

`npm install date-format-lite sys exec-sync shred optimist request async cron time`

### Usage

Typical invocation: `node karma-batch.js <spec-file>` OR `node karma-batch.js --cron <spec-file>`

Type `node karma-batch.js -h` to see the available options.

### Sample Specification File
You specify all the parameters to your batch processing in a JSON file.
You should put all your input files in one directory and all your model files also in one directory.

You can optionally post the generated RDF files to a SPARQL endpoint.

```
{
	karmaHome : "/Users/szekely/Web-Karma/" ,
	modelsDir : "/Users/szekely/github/division-page-data/models" ,
	filesDir : "/Users/szekely/github/division-page-data/datasets" ,
	rdfDir : "/Users/szekely/github/division-page-data/rdf" ,
	baseHttpDirURL : "https://raw.github.com/chetanme/division-page-data/master/data/" ,
	runAsCron : false ,
	cronTimeInMin : 0 ,
	endpoint : "http://localhost:8080/openrdf-sesame/repositories/karma_data" ,
	clearEndpoint : false ,
	filesAndModels : [
		{
			file : "events.json" , model : "events-model.txt"
		}
		, 
		{
			file : "people.json" , model : "people-model.txt"
		}
		,
		{
			file : "schedule.csv" , model : "schedule-model.txt"
		}
	]
}
```

### Caveats

- The implementation of the functions to POST the generated RDF to a triple store is very naive as it loads the whole RDF file into memory. 
    - A better implementation is welcome.
- Error checking is rudimentary.
- Does not show console output from RDF generation process. If something goes wrong you will not get a file, but will not get an error message. 
    - I don't know how to capture the output of the child process. Please let me know if you know how to do this.
