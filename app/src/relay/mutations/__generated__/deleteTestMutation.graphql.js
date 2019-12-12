/**
 * @flow
 * @relayHash 695c517fd2edbe044add55c30fb97ea5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteTestMutationVariables = {|
  input: string
|};
export type deleteTestMutationResponse = {|
  +deleteTest: ?{|
    +id: string
  |}
|};
export type deleteTestMutation = {|
  variables: deleteTestMutationVariables,
  response: deleteTestMutationResponse,
|};
*/


/*
mutation deleteTestMutation(
  $input: ID!
) {
  deleteTest(id: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteTest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Test",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteTestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteTestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteTestMutation",
    "id": null,
    "text": "mutation deleteTestMutation(\n  $input: ID!\n) {\n  deleteTest(id: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dffa45ee8fbf4100ac443420e4573898';
module.exports = node;
