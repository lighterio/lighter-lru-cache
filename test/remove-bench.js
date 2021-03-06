'use strict'
/* global bench it */
var packages = require('./.bench-packages')

bench('Setting and removing 100 items', function () {
  packages.forEach(function (name, Cache) {
    it(name, function () {
      var cache = new Cache()
      cache.set('v0', 0)
      cache.set('v1', 1)
      cache.set('v2', 2)
      cache.set('v3', 3)
      cache.set('v4', 4)
      cache.set('v5', 5)
      cache.set('v6', 6)
      cache.set('v7', 7)
      cache.set('v8', 8)
      cache.set('v9', 9)
      cache.set('v10', 10)
      cache.set('v11', 11)
      cache.set('v12', 12)
      cache.set('v13', 13)
      cache.set('v14', 14)
      cache.set('v15', 15)
      cache.set('v16', 16)
      cache.set('v17', 17)
      cache.set('v18', 18)
      cache.set('v19', 19)
      cache.set('v20', 20)
      cache.set('v21', 21)
      cache.set('v22', 22)
      cache.set('v23', 23)
      cache.set('v24', 24)
      cache.set('v25', 25)
      cache.set('v26', 26)
      cache.set('v27', 27)
      cache.set('v28', 28)
      cache.set('v29', 29)
      cache.set('v30', 30)
      cache.set('v31', 31)
      cache.set('v32', 32)
      cache.set('v33', 33)
      cache.set('v34', 34)
      cache.set('v35', 35)
      cache.set('v36', 36)
      cache.set('v37', 37)
      cache.set('v38', 38)
      cache.set('v39', 39)
      cache.set('v40', 40)
      cache.set('v41', 41)
      cache.set('v42', 42)
      cache.set('v43', 43)
      cache.set('v44', 44)
      cache.set('v45', 45)
      cache.set('v46', 46)
      cache.set('v47', 47)
      cache.set('v48', 48)
      cache.set('v49', 49)
      cache.set('v50', 50)
      cache.set('v51', 51)
      cache.set('v52', 52)
      cache.set('v53', 53)
      cache.set('v54', 54)
      cache.set('v55', 55)
      cache.set('v56', 56)
      cache.set('v57', 57)
      cache.set('v58', 58)
      cache.set('v59', 59)
      cache.set('v60', 60)
      cache.set('v61', 61)
      cache.set('v62', 62)
      cache.set('v63', 63)
      cache.set('v64', 64)
      cache.set('v65', 65)
      cache.set('v66', 66)
      cache.set('v67', 67)
      cache.set('v68', 68)
      cache.set('v69', 69)
      cache.set('v70', 70)
      cache.set('v71', 71)
      cache.set('v72', 72)
      cache.set('v73', 73)
      cache.set('v74', 74)
      cache.set('v75', 75)
      cache.set('v76', 76)
      cache.set('v77', 77)
      cache.set('v78', 78)
      cache.set('v79', 79)
      cache.set('v80', 80)
      cache.set('v81', 81)
      cache.set('v82', 82)
      cache.set('v83', 83)
      cache.set('v84', 84)
      cache.set('v85', 85)
      cache.set('v86', 86)
      cache.set('v87', 87)
      cache.set('v88', 88)
      cache.set('v89', 89)
      cache.set('v90', 90)
      cache.set('v91', 91)
      cache.set('v92', 92)
      cache.set('v93', 93)
      cache.set('v94', 94)
      cache.set('v95', 95)
      cache.set('v96', 96)
      cache.set('v97', 97)
      cache.set('v98', 98)
      cache.set('v99', 99)
      cache.del('v0', 0)
      cache.del('v1', 1)
      cache.del('v2', 2)
      cache.del('v3', 3)
      cache.del('v4', 4)
      cache.del('v5', 5)
      cache.del('v6', 6)
      cache.del('v7', 7)
      cache.del('v8', 8)
      cache.del('v9', 9)
      cache.del('v10', 10)
      cache.del('v11', 11)
      cache.del('v12', 12)
      cache.del('v13', 13)
      cache.del('v14', 14)
      cache.del('v15', 15)
      cache.del('v16', 16)
      cache.del('v17', 17)
      cache.del('v18', 18)
      cache.del('v19', 19)
      cache.del('v20', 20)
      cache.del('v21', 21)
      cache.del('v22', 22)
      cache.del('v23', 23)
      cache.del('v24', 24)
      cache.del('v25', 25)
      cache.del('v26', 26)
      cache.del('v27', 27)
      cache.del('v28', 28)
      cache.del('v29', 29)
      cache.del('v30', 30)
      cache.del('v31', 31)
      cache.del('v32', 32)
      cache.del('v33', 33)
      cache.del('v34', 34)
      cache.del('v35', 35)
      cache.del('v36', 36)
      cache.del('v37', 37)
      cache.del('v38', 38)
      cache.del('v39', 39)
      cache.del('v40', 40)
      cache.del('v41', 41)
      cache.del('v42', 42)
      cache.del('v43', 43)
      cache.del('v44', 44)
      cache.del('v45', 45)
      cache.del('v46', 46)
      cache.del('v47', 47)
      cache.del('v48', 48)
      cache.del('v49', 49)
      cache.del('v50', 50)
      cache.del('v51', 51)
      cache.del('v52', 52)
      cache.del('v53', 53)
      cache.del('v54', 54)
      cache.del('v55', 55)
      cache.del('v56', 56)
      cache.del('v57', 57)
      cache.del('v58', 58)
      cache.del('v59', 59)
      cache.del('v60', 60)
      cache.del('v61', 61)
      cache.del('v62', 62)
      cache.del('v63', 63)
      cache.del('v64', 64)
      cache.del('v65', 65)
      cache.del('v66', 66)
      cache.del('v67', 67)
      cache.del('v68', 68)
      cache.del('v69', 69)
      cache.del('v70', 70)
      cache.del('v71', 71)
      cache.del('v72', 72)
      cache.del('v73', 73)
      cache.del('v74', 74)
      cache.del('v75', 75)
      cache.del('v76', 76)
      cache.del('v77', 77)
      cache.del('v78', 78)
      cache.del('v79', 79)
      cache.del('v80', 80)
      cache.del('v81', 81)
      cache.del('v82', 82)
      cache.del('v83', 83)
      cache.del('v84', 84)
      cache.del('v85', 85)
      cache.del('v86', 86)
      cache.del('v87', 87)
      cache.del('v88', 88)
      cache.del('v89', 89)
      cache.del('v90', 90)
      cache.del('v91', 91)
      cache.del('v92', 92)
      cache.del('v93', 93)
      cache.del('v94', 94)
      cache.del('v95', 95)
      cache.del('v96', 96)
      cache.del('v97', 97)
      cache.del('v98', 98)
      cache.del('v99', 99)
    })
  })
})
