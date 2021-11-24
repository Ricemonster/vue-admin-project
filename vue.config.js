module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~@/styles/Settings/var.scss";
                @import "~@/styles/Tools/_sassMagic.scss";
                `,
            }
        }
    }
}