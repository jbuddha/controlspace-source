hexo.extend.tag.register('codepen', function(args){

	var penId = args[0];
  var title = args[1] || 'A Codepen by Buddha';
  var state = 'load';
	var height = 350;

  if(!isNaN(args[args.length - 1])){
    height = args[args.length - 1];
  }

  var tabs = '';
  var seperator = '';
  if(args.indexOf('result') > -1) {
    tabs = 'result';
    seperator = ',';
  }

  if(args.indexOf('html') > -1)
    tabs = 'html' + seperator + tabs;
  else if(args.indexOf('css') > -1)
    tabs = 'css' + seperator + tabs;
  else if(args.indexOf('js') > -1)
    tabs = 'js' + seperator + tabs;

  if(args.indexOf('wait') > -1)
    state = 'wait';

  var tag = '';
  if(state !== 'load') {
    tag = '<p data-height="' + height + '" data-theme-id="0" data-slug-hash="'+penId+'" data-default-tab="'+ tabs +'" data-user="jbuddha" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/jbuddha/pen/'+penId+'/">'+title+'</a> by Buddha (<a href="http://codepen.io/jbuddha">@jbuddha</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>';
  } else {
    tag = '<p data-height="' + height + '" data-theme-id="0" data-slug-hash="'+penId+'" data-default-tab="'+ tabs +'" data-user="jbuddha" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jbuddha/pen/'+penId+'/">'+title+'</a> by Buddha (<a href="http://codepen.io/jbuddha">@jbuddha</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>';
  }
  return tag;

});
