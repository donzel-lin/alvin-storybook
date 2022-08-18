module.exports = {
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
    ],
    "testEnvironment": "jest-environment-jsdom-global",
    moduleFileExtensions: [
        'js',
        // 'jsx',
        'json',
        'vue'
    ],
    "transform": {
        // 用vue-jest去处理vue文件
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest",
    }
}
