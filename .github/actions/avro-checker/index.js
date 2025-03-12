const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const fs = require('fs');
const path = require('path');

const read_avro_schemas = () => {
    core.notice('Reading Avro schemas');
    // 1) Input values
    const registryUrl = core.getInput('registryUrl', { required: true, trimWhitespace: true });
    const mode = core.getInput('mode', { required: true, trimWhitespace: true });

    core.notice(`Registry URL: ${registryUrl}. Mode: ${mode}`);

    exec.exec('echo "Hello, World!"');

    const schemas = [];
    const schema_dir = path.join(process.cwd(), 'avro');
    const files = fs.readdirSync(schema_dir);
    files.forEach((file) => {
        if (file.endsWith('.avsc')) {
            const schema = fs.readFileSync(path.join(schema_dir, file), 'utf8');
            schemas.push(schema);
        }
    });
    // return schemas;

    core.notice(`Finished reading Avro schemas. Schemas ${JSON.stringify(schemas)}`);

    process.exit(core.ExitCode.Success);
};

read_avro_schemas();
