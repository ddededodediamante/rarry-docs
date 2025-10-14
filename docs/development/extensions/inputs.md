# Dealing With Fields

In most of the cases, you will want blocks that can accept fields (example: the "say" block). 

To implement a field in a block, you can pass a "fields" key:

```js
registerBlocks() {
  return [
    {
      type: "statement", // allows for connection on the top and bottom
      id: "sayHiWithvalue",
      fields: {
        abc: {
          kind: "value", // allows an output block to be connected
          type: "String",
          default: "default" 
        },
      },
      text: "say 'hi' with [abc]", 
    },
  ];
}
```

To get a fields value in the blocks code, you can do this:

```js
registerCode() {
  return {
    sayHiWithvalue: (inputs) => {
      const value = inputs.abc; // here, we are getting the value of the input
      console.log("hi", value); // example functionality
    }
  };
}
```

## Exercise

In the previous extension we made, add the new `say 'hi' with [abc]` block with its functionality.

**Expected result:**

![A block with text saying "say 'hi' with [abc]"](/img/extensions-blockinput.png)

If you look in the console after running this script, the result should be `hi default`.