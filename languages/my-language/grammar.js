module.exports = grammar({
  name: "my_language",

  rules: {
    source_file: ($) => repeat($.comment),

    comment: ($) =>
      token(
        choice(
          seq("//", /.*@info/, /[^\n]*/),
          seq("//", /.*@bug/, /[^\n]*/),
          seq("//", /.*@question/, /[^\n]*/),
        ),
      ),
  },
});
