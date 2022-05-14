const allPalettes = [
    ["#000", "#fff"],
    ["#888c6c", "#a67244", "#402110", "#8c2016", "#590a0a"],
    ["#bf656d", "#732944", "#a67665", "#d9a796", "#8c5042"],
    ["#565bbf", "#071526", "#d6d98b", "#d9984a", "#d99873"],
    ["#613873", "#5d3b8c", "#382859", "#bf5b45", "#d9a19c"],
    ["#d94a64", "#d99379", "#f2cbbd", "#a6523f", "#f2f2f2"],
    ["#734e39", "#a6775b", "#bf8b78", "#d9ab9a", "#8c3b3b"],
    ["#d9d9d9", "#a6a6a6", "#8c8c8c", "#595959", "#262626"],
    ["#8c5626", "#bf6836", "#592614", "#bf5a36", "#a64029"],
    ["#bf7c63", "#d9a796", "#a63429", "#590a0a", "#d96262"],
    ["#a6032f", "#022873", "#035aa6", "#04b2d9", "#05dbf2"],
    ["#58735c", "#f2dc9b", "#bf8a6b", "#260101", "#0d0d0d"],
    ["#8c0712", "#bf8a49", "#bfbcba", "#73574d", "#400303"],
    ["#d9d9d9", "#a6a6a6", "#595959", "#262626", "#0d0d0d"],
    ["#d7d9d9", "#a69d8d", "#d9a282", "#401f14", "#734136"],
    ["#03738c", "#037f8c", "#04d9d9", "#f28972", "#f20505"],
    ["#bf4e63", "#f2f2f2", "#d9ae5f", "#bf7d65", "#d9a38f"],
    ["#a6a6a6", "#f2f2f2", "#595959", "#262626", "#0d0d0d"],
    ["#f2dcc9", "#593018", "#734c36", "#d9b6a3", "#0d0d0d"],
    ["#a6a4a5", "#d9d9d9", "#594f56", "#262626", "#0d0d0d"],
    ["#171526", "#999df2", "#8f9ad9", "#b3bdf2", "#5c6373"],
    ["#021f59", "#2c4001", "#f25c05", "#bf7665", "#a60303"],
    ["#d94e5a", "#012e40", "#add1d9", "#8c0303", "#a64b4b"],
    ["#32a65a", "#84d9a2", "#014005", "#f2f2f2", "#0d0d0d"],
    ["#b3c3f2", "#8fa690", "#73450d", "#bfa78a", "#403d3c"],
    ["#1b3da6", "#26488c", "#2372d9", "#62abd9", "#f2d857"],
    ["#f21326", "#60bfbf", "#98d979", "#d99e30", "#f29999"],
    ["#a65b69", "#733c4a", "#3e4c59", "#bfb19f", "#f2e5d5"],
    ["#302840", "#1f1d59", "#3e518c", "#77a688", "#f2e2c4"],
    ["#9672a6", "#684f73", "#2d2c40", "#737065", "#0d0d0d"],
    ["#3f0259", "#f2e205", "#f2b705", "#f2ebdc", "#d95e32"],
    ["#663f8c", "#038c4c", "#f29727", "#f25f29", "#bf2626"],
    ["#779da6", "#034001", "#f2df7e", "#f2efe9", "#f25244"],
    ["#f21b2d", "#f23d5e", "#777cd9", "#525559", "#e9eff2"],
    ["#6d8ba6", "#bfcfd9", "#bfb84e", "#8c6e37", "#bf9e75"],
    ["#a6a6a6", "#737373", "#404040", "#262626", "#0d0d0d"],
    ["#222626", "#bdbfbf", "#48592f", "#7e8c61", "#9ea68f"],
    ["#bfb0a3", "#a64521", "#400d01", "#737373", "#404040"],
    ["#73b2d9", "#82c0d9", "#d9d04e", "#bf9850", "#8c6330"],
    ["#403f3c", "#f2bb77", "#59372a", "#a68376", "#bfbfbf"],
    ["#731a22", "#a63f48", "#bdd959", "#bfa095", "#8c5042"],
    ["#222e73", "#032ca6", "#85bff2", "#f2c84b", "#f29f05"],
    ["#a66a75", "#580259", "#f05cf2", "#f2e205", "#f2d43d"],
    ["#0476d9", "#05aff2", "#a4d932", "#f2be22", "#f2cc85"],
    ["#d99e30", "#a67a44", "#732002", "#d94625", "#400101"],
    ["#314259", "#d9843b", "#73310a", "#a64914", "#0d0d0d"],
    ["#0f5cbf", "#072b59", "#0f6dbf", "#042940", "#72dbf2"],
    ["#204037", "#558c3b", "#9cd95f", "#bfa78a", "#f2541b"],
    ["#0442bf", "#5cacf2", "#f2b705", "#f29f05", "#f2b8a2"],
    ["#c2d2f2", "#5176a6", "#70731f", "#a67d4b", "#a64b29"],
    ["#485922", "#798c35", "#b4bf5e", "#242614", "#f2f2f2"],
    ["#f2d8c9", "#260b01", "#73564c", "#bf9484", "#d9beb4"],
    ["#f2c063", "#a68446", "#d9a25f", "#8c6a3f", "#59452c"],
    ["#a2cdf2", "#0367a6", "#49b1f2", "#027373", "#7f8c1c"],
    ["#3a6d8c", "#7eadbf", "#f2f1df", "#bf9775", "#8c594d"],
    ["#1f4c73", "#387ca6", "#96d2d9", "#f2e8c9", "#402f11"],
    ["#4c6c73", "#8a8c3e", "#59452c", "#d9b88f", "#bf8f65"],
    ["#f2bb13", "#f28c0f", "#d9a577", "#a61b0f", "#f2f2f2"],
    ["#323e40", "#f2ab27", "#d97d0d", "#732002", "#d94d1a"],
    ["#264022", "#698c46", "#bf9278", "#d9ccc5", "#735e5a"],
    ["#0468bf", "#05aff2", "#f2b705", "#f28705", "#bf3604"],
    ["#730217", "#090b0d", "#f2cb05", "#594302", "#d94f30"],
    ["#bfa004", "#bf7e04", "#bf4904", "#bf1304", "#0d0d0d"],
    ["#d90d32", "#d3d9a7", "#f25116", "#bf3111", "#f2f2f2"],
    ["#f2cb05", "#f2b705", "#262523", "#d97904", "#d92818"],
    ["#7eb3bf", "#8c8630", "#f2f0ce", "#f2bb9b", "#d9765f"],
    ["#034aa6", "#03588c", "#aab7bf", "#56a662", "#f26e22"],
    ["#f26d85", "#bf214b", "#c1d0d9", "#0e6973", "#0e7373"],
    ["#224021", "#5f8c4a", "#59734d", "#35402d", "#592c22"],
    ["#89b3d9", "#f2e6d8", "#d9985f", "#59220e", "#a64521"],
    ["#51608c", "#8697a6", "#bfcdd9", "#bf8756", "#8c4f2b"],
    ["#034c8c", "#69a7bf", "#f2e205", "#f2cb05", "#f2d49b"],
    ["#bf2633", "#f2b90f", "#f2b33d", "#a67a29", "#a66249"],
    ["#eeeeee", "#00adb5", "#393e46", "#222831"],
    ["#6a2c70", "#b83b5e", "#f08a5d", "#f9ed69"],
    ["#95e1d3", "#eaffd0", "#fce38a", "#f38181"],
    ["#eaeaea", "#ff2e63", "#252a34", "#08d9d6"],
    ["#fc5185", "#f5f5f5", "#3fc1c9", "#364f6b"],
    ["#ffffd2", "#fcbad3", "#aa96da", "#a8d8ea"],
    ["#71c9ce", "#a6e3e9", "#cbf1f5", "#e3fdfd"],
    ["#40514e", "#11999e", "#30e3ca", "#e4f9f5"],
    ["#8785a2", "#f6f6f6", "#ffe2e2", "#ffc7c7"],
    ["#abedd8", "#46cdcf", "#3d84a8", "#48466d"],
    ["#112d4e", "#3f72af", "#dbe2ef", "#f9f7f7"],
    ["#ffde7d", "#f6416c", "#f8f3d4", "#00b8a9"],
    ["#53354a", "#903749", "#e84545", "#2b2e4a"],
    ["#311d3f", "#522546", "#88304e", "#e23e57"],
    ["#14ffec", "#0d7377", "#323232", "#212121"],
    ["#a5dee5", "#e0f9b5", "#fefdca", "#ffcfdf"],
    ["#61c0bf", "#bbded6", "#fae3d9", "#ffb6b9"],
    ["#ffaaa5", "#ffd3b6", "#dcedc1", "#a8e6cf"],
    ["#cca8e9", "#c3bef0", "#cadefc", "#defcf9"],
    ["#3e4149", "#444f5a", "#ff9999", "#ffc8c8"],
    ["#ff165d", "#ff9a00", "#f6f7d7", "#3ec1d3"],
    ["#521262", "#6639a6", "#3490de", "#6fe7dd"],
    ["#355c7d", "#6c5b7b", "#c06c84", "#f67280"],
    ["#ffd460", "#f07b3f", "#ea5455", "#2d4059"],
    ["#edb1f1", "#d59bf6", "#9896f1", "#8ef6e4"],
    ["#99ddcc", "#f6f6f6", "#ffe2e2", "#bad7df"],
    ["#c4edde", "#7ac7c4", "#f73859", "#384259"],
    ["#cabbe9", "#ffcef3", "#fdfdfd", "#a1eafb"],
    ["#ff8c94", "#ffaaa6", "#ffd3b5", "#dcedc2"],
    ["#ff5722", "#eeeeee", "#00adb5", "#303841"],
    ["#283c63", "#928a97", "#fbe8d3", "#f85f73"],
    ["#fecea8", "#ff847c", "#e84a5f", "#2a363b"],
    ["#1e2022", "#52616b", "#c9d6df", "#f0f5f9"],
    ["#ff7e67", "#fafafa", "#a2d5f2", "#07689f"],
    ["#e8ffe8", "#a6fff2", "#74f9ff", "#00e0ff"],
    ["#a56cc1", "#a6acec", "#ace7ef", "#cefff1"],
    ["#ff9de2", "#8c82fc", "#b693fe", "#7effdb"],
    ["#f57170", "#f5f5f5", "#10ddc2", "#15b7b9"],
    ["#625772", "#f9a1bc", "#fefaec", "#a9eee6"],
    ["#769fcd", "#b9d7ea", "#d6e6f2", "#f7fbfc"],
    ["#0dceda", "#6ef3d6", "#c6fce5", "#ebfffa"],
    ["#f25d9c", "#b61aae", "#590d82", "#0c056d"],
    ["#878ecd", "#b9bbdf", "#dde7f2", "#dff4f3"],
    ["#ffaaa5", "#ffd3b6", "#fdffab", "#a8e6cf"],
    ["#d7fbe8", "#9df3c4", "#62d2a2", "#1fab89"],
    ["#fc85ae", "#9e579d", "#574b90", "#303a52"],
    ["#fbafaf", "#f2c6b4", "#f3e8cb", "#99e1e5"],
    ["#a6d0e4", "#f9ffea", "#ffecda", "#d4a5a5"],
    ["#eeeeee", "#d72323", "#3a4750", "#303841"],
    ["#c5e3f6", "#fc5c9c", "#fccde2", "#fcefee"],
    ["#7e6bc4", "#c79ecf", "#d6c8ff", "#fef0ff"],
    ["#ed8d8d", "#8d6262", "#4d4545", "#393232"],
    ["#dbedf3", "#f73859", "#404b69", "#283149"],
    ["#fa4659", "#f0fff3", "#c6f1e7", "#11cbd7"],
    ["#537780", "#11d3bc", "#55e9bc", "#fffcca"],
    ["#f5c7f7", "#a393eb", "#5e63b6", "#27296d"],
    ["#004a7c", "#005691", "#e8f1f5", "#fafafa"],
    ["#ffc93c", "#ff9a3c", "#ff6f3c", "#155263"],
    ["#fff5a5", "#ffaa64", "#ff8264", "#ff6464"],
    ["#7098da", "#6eb6ff", "#90f2ff", "#e0fcff"],
    ["#f3f798", "#eab4f8", "#fcc8f8", "#c7f5fe"],
    ["#e3e3e3", "#f95959", "#455d7a", "#233142"],
    ["#f5f5f5", "#d3d4d8", "#3fbac2", "#4d606e"],
    ["#bfcfff", "#c8e7ed", "#ffffc2", "#ffa5a5"],
    ["#625772", "#f38181", "#fefaec", "#a9eee6"],
    ["#ffbd39", "#e61c5d", "#930077", "#3a0088"],
    ["#8971d0", "#7dace4", "#95e8d7", "#adf7d1"],
    ["#e67a7a", "#ffebb7", "#fff4e1", "#9ddcdc"],
    ["#d9faff", "#00bbf0", "#005792", "#00204a"],
    ["#f76b8a", "#fcfefe", "#eaf6f6", "#66bfbf"],
    ["#f2f4c3", "#ffdcf5", "#fdc7ff", "#c7f3ff"],
    ["#d2ecf9", "#1891ac", "#1f5f8b", "#253b6e"],
    ["#649dad", "#66c6ba", "#a4e5d9", "#c8f4de"],
    ["#c86b85", "#e6a4b4", "#f3d7ca", "#f5eee6"],
    ["#fbac91", "#fbe1b6", "#7fdfd4", "#a7efe9"],
    ["#fecea8", "#ff847b", "#e84a5f", "#2a363b"],
    ["#6c5b7c", "#c06c84", "#f67280", "#f8b595"],
    ["#4a266a", "#7f4a88", "#de95ba", "#ffd9e8"],
    ["#ff7c38", "#e03e36", "#b80d57", "#700961"],
    ["#2f9296", "#46b7b9", "#87dfd6", "#dff5f2"],
    ["#f67280", "#c06c84", "#6c5b7b", "#35477d"],
    ["#7c7575", "#b8b0b0", "#dfd3d3", "#fbf0f0"],
    ["#c0ffc2", "#fdffba", "#ffeab6", "#f69d9d"],
    ["#163172", "#1e56a0", "#d6e4f0", "#f6f6f6"],
    ["#aedefc", "#fff6f6", "#ffdfdf", "#fb929e"],
    ["#a7ff83", "#17b978", "#086972", "#071a52"],
    ["#ba52ed", "#ff99fe", "#a4f6f9", "#e4fffe"],
    ["#537791", "#c1c0b9", "#f7f6e7", "#e7e6e1"],
    ["#f2bbbb", "#ed93cb", "#ca82f8", "#a1d9ff"],
    ["#f8ecfd", "#c264fe", "#a82ffc", "#7a08fa"],
    ["#00fff5", "#00adb5", "#393e46", "#222831"],
    ["#1f4e5f", "#79a8a9", "#aacfd0", "#f4f7f7"],
    ["#80d6ff", "#edf798", "#fab57a", "#f06868"],
    ["#8f8787", "#ebcbae", "#f9f9f9", "#a6e4e7"],
    ["#2eb872", "#a3de83", "#feffe4", "#fa4659"],
    ["#355c7d", "#c06c84", "#f67280", "#f8b195"],
    ["#d988bc", "#ffa8b8", "#ffd2a5", "#ffffc1"],
    ["#70a1d7", "#a1de93", "#f7f48b", "#f47c7c"],
    ["#34495e", "#5da0a2", "#aacfd0", "#f4f7f7"],
    ["#f19584", "#fea386", "#f6e4c4", "#29c6cd"],
    ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"],
    ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"],
    ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"],
    ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"],
    ["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"],
    ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"],
    ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F"],
    ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"],
    ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"],
    ["#E94E77", "#D68189", "#C6A49A", "#C6E5D9", "#F4EAD5"],
    ["#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "#FF3D7F"],
    ["#D9CEB2", "#948C75", "#D5DED9", "#7A6A53", "#99B2B7"],
    ["#FFFFFF", "#CBE86B", "#F2E9E1", "#1C140D", "#CBE86B"],
    ["#EFFFCD", "#DCE9BE", "#555152", "#2E2633", "#99173C"],
    ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#00DFFC"],
    ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"],
    ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4"],
    ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#2A363B"],
    ["#655643", "#80BCA3", "#F6F7BD", "#E6AC27", "#BF4D28"],
    ["#00A8C6", "#40C0CB", "#F9F2E7", "#AEE239", "#8FBE00"],
    ["#8a00d4", "#d527b7", "#f782c2", "#f9c46b", "#e3e3e3"],
    ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"],
    ["#454d66", "#309975", "#58b368", "#dad873", "#efeeb4"],
    ["#272643", "#ffffff", "#e3f6f5", "#bae8e8", "#2c698d"],
    ["#361d32", "#543c52", "#f55951", "#edd2cb", "#f1e8e6"],
    ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"],
    ["#12492f", "#0a2f35", "#f56038", "#f7a325", "#ffca7a"],
    ["#122c91", "#2a6fdb", "#48d6d2", "#81e9e6", "#fefcbf"],
    ["#27104e", "#64379f", "#9854cb", "#ddacf5", "#75e8e7"],
    ["#f7a400", "#3a9efd", "#3e4491", "#292a73", "#1a1b4b"],
    ["#343090", "#5f59f7", "#6592fd", "#44c2fd", "#8c61ff"],
    ["#1f306e", "#553772", "#8f3b76", "#c7417b", "#f5487f"],
    ["#e0f0ea", "#95adbe", "#574f7d", "#503a65", "#3c2a4d"],
    ["#f9b4ab", "#fdebd3", "#264e70", "#679186", "#bbd4ce"],
    ["#492b7c", "#301551", "#ed8a0a", "#f6d912", "#fff29c"],
    ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6", "#dee0e6"],
    ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"],
    ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"],
    ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"],
    ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"],
    ["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"],
    ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"],
    ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F"],
    ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"],
    ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"],
    ["#E94E77", "#D68189", "#C6A49A", "#C6E5D9", "#F4EAD5"],
    ["#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "#FF3D7F"],
    ["#D9CEB2", "#948C75", "#D5DED9", "#7A6A53", "#99B2B7"],
    ["#FFFFFF", "#CBE86B", "#F2E9E1", "#1C140D", "#CBE86B"],
    ["#EFFFCD", "#DCE9BE", "#555152", "#2E2633", "#99173C"],
    ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#00DFFC"],
    ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"],
    ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4"],
    ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#2A363B"],
    ["#655643", "#80BCA3", "#F6F7BD", "#E6AC27", "#BF4D28"],
    ["#00A8C6", "#40C0CB", "#F9F2E7", "#AEE239", "#8FBE00"],
    ["#8a00d4", "#d527b7", "#f782c2", "#f9c46b", "#e3e3e3"],
    ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"],
    ["#454d66", "#309975", "#58b368", "#dad873", "#efeeb4"],
    ["#272643", "#ffffff", "#e3f6f5", "#bae8e8", "#2c698d"],
    ["#361d32", "#543c52", "#f55951", "#edd2cb", "#f1e8e6"],
    ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"],
    ["#12492f", "#0a2f35", "#f56038", "#f7a325", "#ffca7a"],
    ["#122c91", "#2a6fdb", "#48d6d2", "#81e9e6", "#fefcbf"],
    ["#27104e", "#64379f", "#9854cb", "#ddacf5", "#75e8e7"],
    ["#f7a400", "#3a9efd", "#3e4491", "#292a73", "#1a1b4b"],
    ["#343090", "#5f59f7", "#6592fd", "#44c2fd", "#8c61ff"],
    ["#1f306e", "#553772", "#8f3b76", "#c7417b", "#f5487f"],
    ["#e0f0ea", "#95adbe", "#574f7d", "#503a65", "#3c2a4d"],
    ["#f9b4ab", "#fdebd3", "#264e70", "#679186", "#bbd4ce"],
    ["#492b7c", "#301551", "#ed8a0a", "#f6d912", "#fff29c"],
    ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6", "#dee0e6"]
]
export default function randomPalette(rnd = Math.random(), filter) {
    const all = filter ? allPalettes.filter(filter) : allPalettes
    return all[0 | rnd * all.length]
}

