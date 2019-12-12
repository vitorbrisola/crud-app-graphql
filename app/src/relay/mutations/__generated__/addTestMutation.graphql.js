/**
 * @flow
 * @relayHash e0f782983a109188d2aea36a6b2d8922
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addTestInput = {|
  questions: $ReadOnlyArray<?string>
|};
export type addTestMutationVariables = {|
  input: addTestInput
|};
export type addTestMutationResponse = {|
  +addTest: ?{|
    +id: string
  |}
|};
export type addTestMutation = {|
  variables: addTestMutationVariables,
  response: addTestMutationResponse,
|};
*/


/*
mutation addTestMutation(
  $input: addTestInput!
) {
  addTest(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addTestInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addTest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
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
    "name": "addTestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addTestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addTestMutation",
    "id": null,
    "text": "mutation addTestMutation(\n  $input: addTestInput!\n) {\n  addTest(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f33aab31514244374d99e9ecb252d96e';
module.exports = node;
