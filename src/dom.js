  /*
  svg.domInterface = function(adtInterface) {
    var recurse = function(domNode) {
      var data, result;
      // Test for valid DOM element
      if (domNode == null)
        return;
      if (!(domNode instanceof Node))
        throw "Unknown object passed to svg.domInterface, expected an instance of Node.";
      if (domNode instanceof SVGElement) {
        var
          child = domNode.firstChild,
          args = [domNode.attributes],
          arg;
        while (child) {
          arg = recurse(child);
          if (arg)
            args.push(arg);
          child = child.nextSibling;
        }
        data = svg.cons[domNode.tagName.toLowerCase()].apply(null, args);
      result = adtInterface(cons);
      if (result == null)
        return;
      if (result instanceof Node)
        return result;
      if (typeof result == 'string')
        ... TODO ...
      throw "Unknown result from interface given to svg.domInterface, expected String or SVGElement.";
    };
    return recurse;
  };
  */