const baseRules = {
	// Syntax-related rules that are enabled should (generally) be errors.
	// Semantics-related rules that are enabled should (generally) be warnings.

	// Disabled because we know better
	'for-direction': 0,

	// Disabled because we know better
	'getter-return': 0,

	// Disabled because we know better
	'no-await-in-loop': 0,

	// Error because there is no reason to use -0
	'no-compare-neg-zero': 'error',

	// Warn because it might be a typo and situations where it's intentional
	// are scarce enough that a linter directive suffices
	'no-cond-assign': 'warn',

	// Warn because 1) we should be wrapping calls to console, and 2) oftentimes
	// console calls are artifacts of debugging
	'no-console': 'warn',

	// Disabled because we know better
	'no-constant-condition': 0,

	// Disabled because we know better and we do too much with control characters
	'no-control-regex': 0,

	// Error because it's always an artifact of debugging
	'no-debugger': 'error',

	// Error because this is always an error
	'no-dupe-args': 'error',

	// Error because this is always an error
	'no-dupe-keys': 'error',

	// Error because this is always an error
	'no-duplicate-case': 'error',

	// Warn because we should explicitly mark empty blocks as intentional,
	// but not an error because we know better
	'no-empty': 'warn',

	// Error because this is always an error
	'no-empty-character-class': 'error',

	// Disabled because we know better
	'no-ex-assign': 0,

	// Disabled because we know better and being explicit never hurt anybody
	'no-extra-boolean-cast': 0,

	// Disabled because we know better and eslint isn't granule enough otherwise
	'no-extra-parens': 0,

	// Error because it adds extra clutter, which we're trying to avoid
	'no-extra-semi': 'error',

	// Disabled because we know better
	'no-func-assign': 0,

	// Disabled because we know better
	'no-inner-declarations': 0,

	// Warn because this might save us some debugging and is otherwise
	// very rare
	'no-invalid-regexp': 'warn',

	// Error, but only in places where we don't know better;
	// we are very anal about whitespace in our output, so we tell
	// eslint to get out of our way for most of those instances
	'no-irregular-whitespace': ['error', {skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true}],

	// Warn, because who would do this anyway? If they are, they probably know better
	'no-obj-calls': 'warn',

	// Disabled because we know better
	'no-prototype-builtins': 0,

	// Warn, because we probably know better but nobody is perfect
	'no-regex-spaces': 'warn',

	// Warn, because more often than not, this is going to be a typo
	// instead of an intentionally sparse array; not an error because
	// we know better otherwise
	'no-sparse-arrays': 'warn',

	// Disabled because we never see this and sometimes we put shell script
	// in Javascript strings because we enjoy watching the world burn
	'no-template-curly-in-string': 0,

	// Error because the example page for this rule is downright scary
	'no-unexpected-multiline': 'error',

	// Warn because we should be aware of it but also sometimes we like to
	// debug our code in peace
	'no-unreachable': 'warn',

	// Warn because we rarely do this and if we do we probably know better
	'no-unsafe-finally': 'warn',

	// Normally semantics rules are kept at warn, but we should never
	// be writing code like `if (!key in object)`
	'no-unsafe-negation': 'error',

	// Normaly semantics rules are kept at warn, but we should always
	// be using isNaN()
	'use-isnan': 'error',

	// Disabled because there just isn't enough time in the day
	'valid-jsdoc': 0,

	// Error because this is (almost) always an error
	'valid-typeof': 'error',

	// Disabled because we know better
	'accessor-pairs': 0,

	// Disabled because we know better
	'array-callback-return': 0,

	// Error because we shouldn't be using var at all anyway
	'block-scoped-var': 'error',

	// Disabled because we know better
	'class-methods-use-this': 0,

	// Disabled because we know better, and sometimes we write interesting
	// code that doesn't conform to society's standards of 'beautiful', also
	// don't @ me I'm 14 I can do what I want
	'complexity': 0,

	// Error because we really should be better about intent
	'consistent-return': 'error',

	// Error because consistent block format is important for readability;
	// see also 'cognitive strain'
	'curly': ['error', 'all'],

	// Disabled because we know better
	'default-case': 0,

	// Error because consistency matters
	'dot-location': ['error', 'property'],

	// Error for most cases for consistency's sake;
	// however we allow snake-case and id's beginning with capital letters to be put into brackets
	'dot-notation': ['error', {allowKeywords: true, allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)'}],

	// Error because there's never a situation where == is better than ===
	'eqeqeq': 'error',

	// Warn because there's usually a better way to write such loops,
	// but if we are using for..in we probably know better
	'guard-for-in': 'warn',

	// Error because it's not 2005
	'no-alert': 'error',

	// Error because they're not allowed in strict mode anyway, and we don't
	// see them enough to be annoyed by the rule
	'no-caller': 'error',

	// Error because we generally should be wrapping cases with decls with braces
	'no-case-declarations': 'error',

	// Disabled because we know better
	'no-div-regex': 0,

	// Warn, because the bike shed has been built and rebuilt and turned into
	// a michelin star restaurant at this point
	'no-else-return': 'warn',

	// Disabled because we know better
	'no-empty-function': 0,

	// Disabled because we know better
	'no-empty-pattern': 0,

	// Error because this this is an error anyway with the eqeqeq rule
	'no-eq-null': 'error',

	// Warn, because please don't use eval() but also we (should) know better
	'no-eval': 'warn',

	// Warn, because we should know better but sometimes it's a good reminder
	// that you're probably cutting a corner somewhere - at least, think twice please
	'no-extend-native': 'warn',

	// Disabled because we know better
	'no-extra-bind': 0,

	// Warn, because this is most commonly the result of debugging and forgetting (although
	// overall it's pretty rare)
	'no-extra-label': 'warn',

	// Disabled because we know better - yes, really. We do. We absolutely do.
	'no-fallthrough': 0,

	// Error because it's super confusing otherwise
	'no-floating-decimal': 'error',

	// Disabled because we know better
	'no-global-assign': 0,

	// Error because this causes so much cognitive strain when trying to visually parse code
	// Also, nobody likes a lazy developer
	'no-implicit-coercion': 'error',

	// Disabled because we know better
	'no-implicit-globals': 0,

	// Disabled because we know better
	'no-implied-eval': 0,

	// Disabled because we probably know better and ideally have tests
	'no-invalid-this': 0,

	// Disabled because what even is that? We probably know better
	'no-iterator': 0,

	// Disabled because we know better
	'no-labels': 0,

	// Disabled because we know better and also "lone blocks" come in handy
	// occasionally when trying to keep block scope clean
	'no-lone-blocks': 0,

	// Disabled because we know better and this rule rarely ever works correctly
	'no-loop-func': 0,

	// Disabled because over-engineering is super annoying and we absolutely know better
	'no-magic-numbers': 0,

	// Error because we should be strict about whitespace - also, this is --fix'able
	'no-multi-spaces': 'error',

	// Error because it's 2017 and you should be using template literals
	'no-multi-str': 'error',

	// Disabled because we know better
	'no-new': 0,

	// Warn because we never do this and also this looks weird, but I don't trust
	// the logic in this rule enough to be correct
	'no-new-func': 'warn',

	// Disabled because we know better and will call out anyone that uses this in PRs
	'no-new-wrappers': 0,

	// Error because it's deprecated and also octals suck - just colocate a directive comment
	// for your chmod calls, you'll be fine
	'no-octal': 'error',

	// Error because octals suck
	'no-octal-escape': 'error',

	// Disabled because we know better
	'no-param-reassign': 0,

	// Disabled because it's not common enough that we see this, and in the event we /do/ use it
	// we almost certainly know better
	'no-proto': 0,

	// Error because this should already be an error
	'no-redeclare': 'error',

	// Disabled because this is just way too picky and you're only
	// going to slow yourself down with rules like this
	'no-restricted-properties': 0,

	// Disabled because we know better
	'no-return-assign': 0,

	// Warn because sometimes we know better and other times we want to
	// know when we can avoid async hell
	'no-return-await': 'warn',

	// Disabled because we know better
	'no-script-url': 0,

	// Error because this is never a reason to do this
	'no-self-assign': 'error',

	// Warn because sometimes there's an 'in the moment' debugging benefit
	'no-self-compare': 'warn',

	// Error because nobody writes code like this and to be quite honest
	// I don't think many people would know how to read it
	'no-sequences': 'error',

	// Breaking the 'warn only' semantics rules rule because it's time to start doing
	// errors better
	'no-throw-literal': 'error',

	// Disabled because we know better and usually have tests
	'no-unmodified-loop-condition': 0,

	// Disabled because this rule does like 20 different things and we have opinions on
	// all of them, most of which are affected given the context of the surrounding code
	'no-unused-expressions': 0,

	// Error because it's just extra cruft if we don't
	'no-unused-labels': 'error',

	// Disabled because we know better
	'no-useless-call': 0,

	// Disabled because we know better
	'no-useless-concat': 0,

	// Disabled because we know better and sometimes we're being explicit
	'no-useless-escape': 0,

	// Disabled because we generally catch these in PR and other times we're
	// being explicit - this is just too subjective to have a linter care about
	'no-useless-return': 0,

	// Disabled becuase we know better
	'no-void': 0,

	// Disabled because stop thought-policing me
	'no-warning-comments': 0,

	// Error because it's not 1999
	'no-with': 'error',

	// Disabled because we probably know better and I don't trust this rule
	// to be smart enough
	'prefer-promise-reject-errors': 0,

	// Breaking the semantics rule becuase the default behavior of parseInt()
	// can parse hexadecimal characters if you're not careful, and a lot of
	// people don't know that - which has (in the past) left software open
	// to vulnerabilities
	'radix': 'error',

	// Disabled because we absolutely know better and this is a silly assertion anyway
	'require-await': 0,

	// Disabled because 1) we aren't using vars, and 2) this isn't C89
	'vars-on-top': 0,

	// Error becuase consistency is good and readability is better
	'wrap-iife': ['error', 'inside'],

	//                           ____
	//                        _.' :  `._
	//                    .-.'`.  ;   .'`.-.
	//           __      / : ___\ ;  /___ ; \      __
	//         ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
	//         :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
	//              `:-.._J '-.-'L__ `-- ' L_..-;'
	//                "-.__ ;  .-"  "-.  : __.-"
	//                    L ' /.------.\ ' J
	//                     "-.   "--"   .-"
	//
	// Error because wise we are, but 900 years wise we are not
	'yoda': 'error',

	// Error because it's implied already in modern modules
	'strict': ['error', 'never'],

	// Disabled because we know better
	'init-declarations': 0,

	// Error because oh my god we have had so many bugs becuase of this
	'no-catch-shadow': 'error',

	// Breaking the semantics rule because we should never be doing this
	'no-delete-var': 'error',

	// Error because this causes amgiguity and labels aren't common enough
	// to justify shadowing a variable
	'no-label-var': 'error',

	// Disabled because we're not that opinionated
	'no-restricted-globals': 0,

	// Warn because sometimes we know better and other times we're just lazy
	// when we shouldn't be
	'no-shadow': 'warn',

	// Error because how in the world is this even legal syntax?!
	'no-shadow-restricted-names': 'error',

	// Error because we should be documenting where identifiers come from
	'no-undef': 'error',

	// Disabled because we know better and sometimes we're trying to be explicit
	'no-undef-init': 0,

	// Error because it's already an error thanks to no-shadow-restricted-names
	'no-undefined': 'error',

	// Warn because this is useful to keep track of but this rule gets in the way
	// when writing code and testing
	'no-unused-vars': 'warn',

	// Error because we don't use var anymore and let/const don't hoist, so using before
	// defining will always result in an error
	'no-use-before-define': 'error',

	// Warn because this has bitten us a few times but also sometimes we know better
	'callback-return': 'warn',

	// Disabled because we know better
	'global-require': 0,

	// Disabled because we know better
	'handle-callback-err': 0,

	// Disabled because we know better
	'no-buffer-constructor': 0,

	// Error because consistency matters
	'no-mixed-requires': 'error',

	// Error there is never a reason to call `new require(...)` without parens
	'no-new-require': 'error',

	// Warn because while we probably know better, we should also probably not be doing this
	'no-path-concat': 'warn',

	// Disabled because what, why?
	'no-process-env': 0,

	// Disabled because we literally write command line programs all day and know what we're doing
	'no-process-exit': 0,

	// Disabled because we're not that opinionated
	'no-restricted-modules': 0,

	// Disabled because we know better and sometimes sync is faster than async
	'no-sync': 0,

	// Error because consistency and readability matter
	'array-bracket-newline': ['error', 'consistent'],

	// Error because consistency matters
	'array-bracket-spacing': ['error', 'never', {singleValue: false, objectsInArrays: false, arraysInArrays: false}],

	// Disabled because we have already specified how we want arrays to be formatted
	'array-element-newline': 0,

	// Error because consistency matters
	'block-spacing': ['error', 'always'],

	// Error because consistency and readability matter
	'brace-style': ['error', '1tbs', {allowSingleLine: false}],

	// Warn because consistency matters but also sometimes we know better
	'camelcase': 'warn',

	// Disabled because this is easily the most annoying linter rule on the planet
	'capitalized-comments': 0,

	// Error because consistency matters
	'comma-dangle': ['error', 'never'],

	// Error because consistency and readability matter
	'comma-spacing': ['error', {before: false, after: true}],

	// Error because consistency matters, and arguably readability (plus nobody uses comma-first so it appears
	// quite foreign if you're not used to it)
	'comma-style': ['error', 'last'],

	// Error because consistency matters
	'computed-property-spacing': ['error', 'never'],

	// Error because consistency matters and you should use a directive if you know better
	// (to be clear since this rule's name is a bit misleading, this enforces the name of the
	// variable when you do `self = this` for proper context capturing - not super common
	// anymore but still useful to lint)
	'consistent-this': ['error', 'self'],

	// Error becuase your text editor should be doing this anyway and it causes extra
	// cruft in diffs if you don't
	'eol-last': ['error', 'always'],

	// Error because consistency matters
	'func-call-spacing': ['error', 'never'],

	// Warn because it's generally a good idea but sometimes we know better
	'func-name-matching': ['warn', 'always'],

	// Warn as needed because we generally know better
	'func-names': ['warn', 'as-needed'],

	// Disabled because we know better and check these things in PRs
	'func-style': 0,

	// Just force consistency here; we know better when and when not to use new lines
	'function-paren-newline': ['error', 'consistent'],

	// Disabled because we're not that opinionated
	'id-blacklist': 0,

	// Disabled because we're not that opinionated
	'id-length': 0,

	// Disabled because we're not that opinionated
	'id-match': 0,

	// Tabs.
	//
	// Hear me out.
	//
	// The main arguments FOR tabs are:
	//
	// - Everyone can specify their indentation preferences without affecting everyone else
	// - Less bytes (not a huge problem, but why complicate things)
	// - Faster to indent in ALL text editors (some people don't like magic IDEs)
	// - Faster to traverse in ALL text editors (see above)
	//
	// The main arguments AGAINST tabs are:
	//
	// - Tabs allow different widths
	// - Can't align
	// - Tabs are for tabular data
	// - Default of 8 space widths in browsers, including Github
	// - <insert language> doesn't allow hard tabs
	// - My text editor makes them really big/small/not what I want
	//
	// Here are the responses to the AGAINST items, in order:
	//
	// - That's a feature, not a bug
	// - Tabs for block indentation, spaces for alignment (see https://tabs.now.sh/#/Qix-/xopt/master/xopt.h)
	// - This isn't 1995, and nobody said they weren't
	// - Use .editorconfig (see https://github.com/Qix-/test-gh-editorconfig/blob/master/index.js and editorconfig.org)
	// - Use .editorconfig
	// - If your text editor lacks the ability to customize tab widths, find a new editor (might I suggest ViM?)
	'indent': ['error', 'tab', {'SwitchCase': 0}],

	// Error because consistency matters
	'jsx-quotes': ['error', 'prefer-double'],

	// Error because consistency and readability matter
	'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'strict'}],

	// Error because consistency and readability matter
	'keyword-spacing': ['error', {before: true, after: true}],

	// Disabled because we know better
	'line-comment-position': 0,

	// Error because consistency matters
	'linebreak-style': ['error', 'unix'],

	// Disabled because we know better
	'lines-around-comment': 0,

	// Error because consistency and readability matter
	'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],

	// Disabled because we know better
	'max-depth': 0,

	// Disabled because we know better and 80 characters is arbitrary
	// and was originally meant to match IBM punch cards and some
	// archaic dumb terminal widths. Thankfully, we've evolved as a species
	// to no longer require such ridiculous limitations, and we at ZEIT
	// trust you not to abuse your newfound responsibility.
	'max-len': 0,

	// Disabled because what kind of limitation or metric is this?
	'max-lines': 0,

	// Disabled because we know better and thanksfully async/await gets rid of
	// most callback hell.
	'max-nested-callbacks': 0,

	// Disabled because we know better
	'max-params': 0,

	// Disabled because we know better
	'max-statements': 0,

	// Error and max 1, because you shouldn't be writing minified code to start with
	'max-statements-per-line': ['error', {max: 1}],

	// Disabled because we know better and this rule isn't fine-grained enough to really
	// help with consistency or style
	'multiline-comment-style': 0,

	// Error because consistency and readability matter
	'multiline-ternary': ['error', 'always-multiline'],

	// Warning because it should be consistent but sometimes we know better
	'new-cap': 'warn',

	// Error because consistency and the reduction of cognitive strain matter
	'new-parens': 'error',

	// Error for consistency. This is one of those times where --fix is going to actually help you.
	'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],

	// Disabled because we know better
	'no-array-constructor': 0,

	// Disabled because a linter shouldn't be disabling operators for which there is no alternative
	'no-bitwise': 0,

	// Disabled because we know better
	'no-inline-comments': 0,

	// Error for consistency; yes, this rule is --fix'able
	'no-lonely-if': 'error',

	// Error because readability counts; also, an error from this rule makes you
	// double-check your logic because if you're not using parens you probably haven't
	// been scarred into constant paranoia yet
	'no-mixed-operators': 'error',

	// See `indent` rule - this is an error unless you're using tabs for indentation and spaces
	// for alignment
	//
	// https://www.emacswiki.org/emacs/SmartTabs
	'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

	// Warn because we generally know better
	'no-multi-assign': 'warn',

	// Error for consistency and readability; this is among the many --fix'able rules, I promise
	'no-multiple-empty-lines': 'error',

	// Warn because we generally know better but sometimes it's always helpfuly to have a reminder
	// after some heat-of-the-moment refactoring
	'no-negated-condition': 'warn',

	// Disabled because we know better and you don't realize how annoying this rule is until you enable it
	'no-nested-ternary': 0,

	// Warn because you shouldn't be doing this...
	'no-new-object': 'warn',

	// Disabled because we know better
	// Has nothing to do with C++
	'no-plusplus': 0,

	// Disabled because we're not picky
	'no-restricted-syntax': 0,

	// Disabled because of our indentation style
	'no-tabs': 0,

	// Disabled because we know better
	'no-ternary': 0,

	// Error; this is fixable and you really should be using editorconfig anyway
	'no-trailing-spaces': 'error',

	// Disabled because we know better
	'no-underscore-dangle': 0,

	// Disabled because we know better
	'no-unneeded-ternary': 0,

	// Error because readability and consistency count
	'no-whitespace-before-property': 'error',

	// Disabled because we don't support this syntax anyway
	// and there's no point in piling on more errors - in fact,
	// the extra error here might be confusing
	'nonblock-statement-body-position': 0,

	// Error because readability and consistency count
	'object-curly-newline': ['error', {multiline: true, consistent: true}],

	// Error because consistency counts
	'object-curly-spacing': ['error', 'never'],

	// Disabled because the rule isn't specific enough
	'object-property-newline': 0,

	// Error because consistency and readability count,
	// and the old multi-decl syntax has long fallen by the wayside
	'one-var': ['error', 'never'],

	// Disabled because it's irrelevant due to `one-var`
	'one-var-declaration-per-line': 0,

	// Error for consistency; this is indeed fixable
	'operator-assignment': ['error', 'always'],

	// Error since it's fixable, and this helps readability
	'operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],

	// Error since it's fixable and is consistent
	'padded-blocks': ['error', 'never'],

	// Disable because there is no requirement/restriction; the code should dictate
	// where padding lines are placed.
	'padding-line-between-statements': 0,

	// Error since it's fixable; consistency matters
	'quote-props': ['error', 'consistent-as-needed', {keywords: true, unnecessary: true, numbers: false}],

	// Error since it's fixable and consistent
	'quotes': ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],

	// Disable because there isn't enough time in the day
	'require-jsdoc': 0,

	// Error because there are bugs that can be introduced if semi-colons aren't considered.
	// Fixable, so even if you're Guillermo Rauch you can still enjoy yourself (:
	'semi': ['error', 'always', {omitLastInOneLineBlock: false}],

	// Error because this is fixable and helps consistency and readability
	'semi-spacing': ['error', {before: false, after: true}],

	// Error because why in the world would you have semi-colons at the beginning of lines; this isn't BASIC.
	'semi-style': ['error', 'last'],

	// Disabled because there really, really isn't enough time in the day
	'sort-keys': 0,

	// Disabled because there really, really isn't enough time in the day
	'sort-vars': 0,

	// Error because consistency and readability matter
	'space-before-blocks': ['error', 'always'],

	// Error because consistency matters
	'space-before-function-paren': ['error', {anonymous: 'always', named: 'never', asyncArrow: 'always'}],

	// Error because consistency matters
	'space-in-parens': ['error', 'never'],

	// Error because consistency and readability matter
	'space-infix-ops': ['error', {int32Hint: true}],

	// Error because readability and consistency matter
	'space-unary-ops': ['error', {words: true, nonwords: false}],

	// Error because readability and consistency matter; this is fixable, for those curious
	'spaced-comment': ['error', 'always'],

	// Error because readability and consistency matter
	'switch-colon-spacing': ['error', {after: true, before: false}],

	// Error because consistency matters
	'template-tag-spacing': ['error', 'never'],

	// Error because this isn't 1990 and utf-8 is a wo̕nd̷eŕfu͡l thiǹg
	'unicode-bom': ['error', 'never'],

	// Disabled because we know better
	'wrap-regex': 0,

	// Error because consistency matters
	'arrow-body-style': ['error', 'as-needed'],

	// Error because consistency matters
	'arrow-parens': ['error', 'as-needed', {requireForBlockBody: false}],

	// Error becuase readability counts
	'arrow-spacing': ['error', {before: true, after: true}],

	// Error because you can still return an object or null from a constructor without needing to call
	// super() (and still avoid the ReferenceError()) but all other cases require super(). Despite the
	// docs not mentioning it, this correctly detects constructors that return instead of super().
	//
	// This is an error instead of warn even though it's a semantics check because there will never
	// be a time were we know better. It's effectively a syntax error if you don't use it correctly.
	'constructor-super': 'error',

	// Error because consistency matters
	'generator-star-spacing': ['error', 'before'],

	// Warn on modifying class identifiers, because you're probably not doing something right
	// but you may still know better
	'no-class-assign': 'warn',

	// Error on confusing parenthesis because they are confusing and fairly objectively hard to read
	'no-confusing-arrow': ['error', {allowParens: true}],

	// Error since this will always result in a runtime error
	'no-const-assign': 'error',

	// Error since the times where you know better will probably warrant a directive and an explanation
	'no-dupe-class-members': 'error',

	// Warn on "duplicate" imports; we warn because we might know better and
	// this rule isn't smart enough to warrant erroring
	'no-duplicate-imports': ['error', {includeExports: false}],

	// Warn on new Symbol() since there's a chance you know better
	'no-new-symbol': 'warn',

	// Disabled because we're not that opinionated
	'no-restricted-imports': 0,

	// Error because this will never not (double negative) cause a reference error
	'no-this-before-super': 'error',

	// Error because this is fixable and unnecessary
	'no-useless-computed-key': 'error',

	// Error because empty constructors are unnecessary and only add visual cruft
	'no-useless-constructor': 'error',

	// Error because it's fixable and unnecessary
	'no-useless-rename': 'error',

	// Error because it's not 2010 anymore
	'no-var': 'error',

	// Error because it's fixable and reads nicely if consistent
	'object-shorthand': ['error', 'consistent-as-needed'],

	// Disabled because we know better
	'prefer-arrow-callback': 0,

	// Error because it's fixable and safer (thus justifying not being a warning)
	'prefer-const': ['error', {destructuring: 'all'}],

	// Disabled because we know better and I don't trust this rule to be smart enough
	'prefer-destructuring': 0,

	// Disabled because we know better and there is a chance we're trying to be explicit
	'prefer-numeric-literals': 0,

	// Warn because rest params are generally better, but sometimes we might know better
	'prefer-rest-params': 'warn',

	// Error because spreads are visually easier to parse than .apply() and may well
	// have a performance benefit. Also, this is fixable.
	'prefer-spread': 'error',

	// Warn because we should be moving to template literals instead of hard concatenation
	// but sometimes we might want to be explicit
	'prefer-template': 'warn',

	// Warn because we probably know better (PRs are a good thing)
	'require-yield': 'warn',

	// Error because consistency matters
	'rest-spread-spacing': ['error', 'never'],

	// Disabled because the auto-fixer isn't smart enough to help with this rule, and it's
	// not important enough to be a warning or an error.
	'sort-imports': 0,

	// Warning because we should be providing Symbol descriptions but we might actually know better
	'symbol-description': 'warn',

	// Error because consistency matters
	'template-curly-spacing': ['error', 'never'],

	// Error because consistency and readability matter
	'yield-star-spacing': ['error', 'before'],
};

const flowRules = {
	// FLOW: Error because consistency matters
	'flowtype/boolean-style': ['error', 'boolean'],

	// FLOW: Error because we should always define our types
	'flowtype/define-flow-type': 'error',

	// FLOW: Error because consistency matters
	'flowtype/delimiter-dangle': ['error', 'never'],

	// FLOW: Error because consistency matters
	'flowtype/generic-spacing': ['error', 'never'],

	// FLOW: Error because consistency matters and you're probably doing something wrong here
	'flowtype/no-dupe-keys': 'error',

	// FLOW: Disabled because we know better
	'flowtype/no-mutable-array': 0,

	// FLOW: Error because we shouldn't be encouraging the use of boxed types
	'flowtype/no-primitive-constructor-types': 'error',

	// FLOW: Error because this usually indicates an error
	'flowtype/no-types-missing-file-annotation': 'error',

	// FLOW: Warn because sometimes we might know better
	'flowtype/no-unused-expressions': 'warn',

	// FLOW: Error because we shouldn't be lazy
	'flowtype/no-weak-types': 'error',

	// FLOW: Error because consistency matters (and this is fixable)
	'flowtype/object-type-delimiter': ['error', 'comma'],

	// FLOW: Error because we should be good developers; otherwise, why use Flow?
	'flowtype/require-parameter-type': ['error', {excludeArrowFunctions: true}],

	// FLOW: Error becuase we should be good developers
	'flowtype/require-return-type': ['error', 'always', {excludeArrowFunctions: 'expressionsOnly'}],

	// FLOW: Error because the files that we /do/ lint should have valid flow annotations, and
	//       consistent ones at that. Note that the init script will place the config option
	//       in your package.json that only enables flow types for files that have the annotation,
	//       so this rule effectively only enforces the convention on flow files.
	'flowtype/require-valid-file-annotation': ['error', 'always', {annotationStyle: 'block'}],

	// FLOW: Disabled because inference is okay sometimes
	'flowtype/require-variable-type': 0,

	// FLOW: Error because it's fixable and we should be consistent
	'flowtype/semi': ['error', 'always'],

	// FLOW: Disabled because we're not that picky
	'flowtype/sort-keys': 0,

	// FLOW: Error because it's fixable, readability counts and consistency matters
	'flowtype/space-after-type-colon': ['error', 'always'],

	// FLOW: Error because it's fixable, readability counts and consistency matters
	'flowtype/space-before-generic-bracket': ['error', 'never'],

	// FLOW: Error because we should have a consistent naming convention
	'flowtype/type-id-match': ['error', '^([A-Z]\\w*)+'],

	// FLOW: Error because consistency matters
	'flowtype/union-intersection-spacing': ['error', 'never']
};

function hasPackage(name) {
	try {
		require.resolve(name);
		return true;
	} catch (err) {
		void err;
		return false;
	}
}

module.exports = {
	parserOptions: {
		ecmaVersion: 2017
	},
	rules: Object.assign(
		baseRules,
		hasPackage('eslint-plugin-flowtype') ? flowRules : {}
	)
};
