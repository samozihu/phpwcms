(function(){var d={},c=["once","throttle","pause"],b=c.length;while(b--){d[c[b]]=Events.lookupPseudo(c[b])}Event.definePseudo=function(e,f){d[e]=Type.isFunction(f)?{listener:f}:f;return this};var a=Element.prototype;[Element,Window,Document].invoke("implement",Events.Pseudos(d,a.addEvent,a.removeEvent))})();