'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/PrincessOfTheKittens/code/LearningMaterials/nextjs-practice/pages/index.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { as: '/' + props.id, href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, ' ', props.title, ' ')));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, ' Constellations! \u2604\uFE0F\uD83D\uDCAB\uD83D\uDEF0\uFE0F '), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(PostLink, { title: 'Capricorn', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(PostLink, { title: 'Aquarius', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(PostLink, { title: 'Pices', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(PostLink, { title: 'Aries', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(PostLink, { title: 'Tarus', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(PostLink, { title: 'Gemini', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(PostLink, { title: 'Cancer', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(PostLink, { title: 'Leo', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(PostLink, { title: 'Virgo', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(PostLink, { title: 'Libra', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(PostLink, { title: 'Scorpio', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(PostLink, { title: 'Sagittarius', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })));
};