/**
 * @flow
 * @relayHash c216317c505cfdeec37c8731a4cfb0fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type questionsQueryVariables = {||};
export type questionsQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type questionsQuery = {|
  variables: questionsQueryVariables,
  response: questionsQueryResponse,
|};
*/


/*
query questionsQuery {
  questions {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questions",
    "storageKey": null,
    "args": null,
    "concreteType": "Question",
    "plural": true,
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
    "name": "questionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "questionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "questionsQuery",
    "id": null,
    "text": "query questionsQuery {\n  questions {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6957074f55d6b3af2b09c3df3d405ff4';
module.exports = node;
