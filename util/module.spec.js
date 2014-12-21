// Copyright (c) 2014 Bits & Co. and other generator-ng contributors.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function () {
  'use strict';
  
  var
    chai = require('chai'),
    expect = chai.expect,
    module = require('./module.js'),
    path = require('path');
  
  chai.should();
  
  describe('module', function() {
    
    it('should return null when the file is not found', function() {
      expect(module.findModules(
        path.join(__dirname, 'modules.js')
      )).to.be.null();
    });
  });
}());