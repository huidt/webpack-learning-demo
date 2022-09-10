const per = {
  nane: 'huidt',
  age: 23,
  say: function (name = 'world!') {
    const _word = `hello, ${name}!`
    console.log(_word)
    return _word
  },
}
export default per
