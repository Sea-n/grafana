module.exports = function(config) {
  return {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 8,
    },
    css: {
      src: '<%= srcDir %>/css/default.min.css',
      dest: '<%= destDir %>/css'
    }
  };
};
