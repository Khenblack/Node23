const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const fs = require('fs');
const path = require('path');

const read_avro_schemas = () => {
    core.notice('Reading Avro schemas');
    const schemas = [];
    const schema_dir = path.join(process.cwd(), 'avro');
    const files = fs.readdirSync(schema_dir);
    files.forEach((file) => {
        if (file.endsWith('.avsc')) {
            const schema = fs.readFileSync(path.join(schema_dir, file), 'utf8');
            schemas.push(schema);
        }
    });
    return schemas;
};

read_avro_schemas();
