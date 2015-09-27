import _ from 'lodash';

export default function(schema, defaults) {
  schema.methods.update = async function(source, permitted = defaults) {
    Object.assign(this, permitted ? _.pick(source, permitted) : source);
    return (await this.save())[0];
  }
}
