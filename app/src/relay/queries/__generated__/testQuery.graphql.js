/**
 * @flow
 * @relayHash bc521ea4094a44a8cf52f1707d8c6edf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type testQueryVariables = {|
  input: string
|};
export type testQueryResponse = {|
  +test: ?{|
    +questions: ?$ReadOnlyArray<?string>
  |}
|};
export type testQuery = {|
  variables: testQueryVariables,
  response: testQueryResponse,
|};
*/


/*
query testQuery(
  $input: ID!
) {
  test(id: $input) {
    questions
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
    "kind": "Variable",
    "name": "id",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "questions",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "testQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "test",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Test",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "testQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "test",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Test",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "testQuery",
    "id": null,
    "text": "query testQuery(\n  $input: ID!\n) {\n  test(id: $input) {\n    questions\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84cad6f95002fba19a4aae28d1f3cc05';
module.exports = node;
