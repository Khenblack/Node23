const fs = require('fs');
const path = require('path');

const read_avro_schemas = () => {
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
