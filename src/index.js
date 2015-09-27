import _ from 'lodash';

export default function(schema, options = {}) {
  schema.methods.update = async function(source, permitted) {
    permitted = permitted || options.permitted;
    Object.assign(this, permitted ? _.pick(source, permitted) : source);
    return (await this.save())[0];
  }
}
