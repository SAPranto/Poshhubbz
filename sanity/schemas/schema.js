import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import category from "./category";
import product from "./product";
import banner from "./banner";
import bag from "./bag";


export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    banner,
    category,
    bag,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
