import color from "color";
import { Dimensions, PixelRatio, Platform } from "react-native";
import { Colors } from "../../constants";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
    platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
    platformStyle,
    platform,

    // Android
    androidRipple: true,
    androidRippleColor: "rgba(256, 256, 256, 0.3)",
    androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
    btnUppercaseAndroidText: true,

    // Badge
    badgeBg: "#ED1727",
    badgeColor: "#fff",
    badgePadding: platform === "ios" ? 3 : 0,

    // Button
    btnFontFamily: "clear-sans",
    btnDisabledBg: Colors.blue,
    buttonPadding: 15,
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },
    get btnTextSize() {
        return platform === "ios"
            ? this.fontSizeBase * 1.1
            : this.fontSizeBase - 1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.6;
    },

    // Card
    cardDefaultBg: "#fff",
    cardBorderColor: "#ccc",

    // CheckBox
    CheckboxRadius: platform === "ios" ? 13 : 0,
    CheckboxBorderWidth: platform === "ios" ? 1 : 2,
    CheckboxPaddingLeft: platform === "ios" ? 4 : 2,
    CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
    CheckboxIconSize: platform === "ios" ? 21 : 14,
    CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
    CheckboxFontSize: platform === "ios" ? 23 / 0.9 : 18,
    DefaultFontSize: 17,
    checkboxBgColor: "#039BE5",
    checkboxSize: 20,
    checkboxTickColor: "#fff",

    // Color
    brandPrimary: "#1eb5e4",
    brandInfo: "#62B1F6",
    brandSuccess: "#5cb85c",
    brandDanger: "#d9534f",
    brandWarning: "#f0ad4e",
    brandDark: "#25283d",
    brandLight: "#f4f4f4",

    // Font
    fontFamily: "clear-sans",
    fontSizeBase: 15,
    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },

    // Footer
    footerHeight: isIphoneX ? 89 : 55,
    footerDefaultBg: platform === "ios" ? Colors.lightBlue : "#4179F7",
    footerPaddingBottom: isIphoneX ? 34 : 0,

    // FooterTab
    tabBarTextColor: "#2874F0",
    tabBarTextSize: platform === "ios" ? 14 : 11,
    activeTab: "#fff",
    sTabBarActiveTextColor: "#007aff",
    tabBarActiveTextColor: "#2874F0",
    tabActiveBgColor: "#cde1f9",

    // Header
    toolbarBtnColor: platform === "ios" ? "#007aff" : "#fff",
    toolbarDefaultBg: platform === "ios" ? Colors.lightBlue : "#3F51B5",
    toolbarHeight: platform === "ios" ? (isIphoneX ? 88 : 64) : 56,
    toolbarSearchIconSize: platform === "ios" ? 20 : 23,
    toolbarInputColor: platform === "ios" ? "#CECDD2" : "#fff",
    searchBarHeight: platform === "ios" ? 30 : 40,
    searchBarInputHeight: platform === "ios" ? 30 : 50,
    toolbarBtnTextColor: "#000",
    toolbarDefaultBorder: "#a7a6ab",
    iosStatusbar: platform === "ios" ? "dark-content" : "light-content",
    get statusBarColor() {
        return color(this.toolbarDefaultBg)
            .darken(0.2)
            .hex();
    },
    get darkenHeader() {
        return color(this.tabBgColor)
            .darken(0.03)
            .hex();
    },

    // Icon
    iconFamily: "Ionicons",
    iconFontSize: platform === "ios" ? 30 : 28,
    iconHeaderSize: platform === "ios" ? 33 : 24,

    // InputGroup
    inputFontSize: 16,
    inputBorderColor: Colors.grey,
    inputSuccessBorderColor: "#2b8339",
    inputErrorBorderColor: Colors.red,
    inputHeightBase: 50,
    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return "#575757";
    },

    // Line Height
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    lineHeight: platform === "ios" ? 20 : 24,

    // List
    listBg: Colors.white,
    listBorderColor: "#c9c9c9",
    listDividerBg: Colors.lightGrey,
    listBtnUnderlayColor: "#DDD",
    listItemPadding: platform === "ios" ? 10 : 12,
    listNoteColor: "#808080",
    listNoteSize: 13,

    // Progress Bar
    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B",

    // Radio Button
    radioBtnSize: platform === "ios" ? 25 : 23,
    radioSelectedColorAndroid: "#3F51B5",
    radioBtnLineHeight: platform === "ios" ? 29 : 24,
    radioColor: this.brandPrimary,

    // Segment
    segmentBackgroundColor: platform === "ios" ? "#F8F8F8" : "#3F51B5",
    segmentActiveBackgroundColor: platform === "ios" ? "#007aff" : "#fff",
    segmentTextColor: platform === "ios" ? "#007aff" : "#fff",
    segmentActiveTextColor: platform === "ios" ? "#fff" : "#3F51B5",
    segmentBorderColor: platform === "ios" ? "#007aff" : "#fff",
    segmentBorderColorMain: platform === "ios" ? "#a7a6ab" : "#3F51B5",

    // Spinner
    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    // Tab
    tabDefaultBg: platform === "ios" ? "#F8F8F8" : "#3F51B5",
    topTabBarTextColor: platform === "ios" ? "#6b6b6b" : "#b3c7f9",
    topTabBarActiveTextColor: platform === "ios" ? "#007aff" : "#fff",
    topTabBarBorderColor: platform === "ios" ? "#a7a6ab" : "#fff",
    topTabBarActiveBorderColor: platform === "ios" ? "#007aff" : "#fff",

    // Tabs
    tabBgColor: "#F8F8F8",
    tabFontSize: 15,

    // Text
    textColor: "#25283d",
    inverseTextColor: "#ffffff",
    noteFontSize: 14,
    get defaultTextColor() {
        return this.textColor;
    },

    // Title
    titleFontfamily: "clear-sans",
    titleFontSize: platform === "ios" ? 17 : 19,
    subTitleFontSize: platform === "ios" ? 12 : 14,
    subtitleColor: platform === "ios" ? "#8e8e93" : "#FFF",
    titleFontColor: platform === "ios" ? "#000" : "#FFF",

    // Other
    borderRadiusBase: 5,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    contentPadding: 15,
    dropdownLinkColor: "#414142",
    inputLineHeight: 20,
    deviceWidth,
    deviceHeight,
    isIphoneX,
    inputGroupRoundedBorderRadius: 30
};
