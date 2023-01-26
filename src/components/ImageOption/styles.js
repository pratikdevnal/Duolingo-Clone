import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    
    optionContainer:{   
        borderWidth:2,
        borderColor:"lightgrey",
        borderRadius:10,
        borderBottomWidth:4,
        //size
        width:"48%",
        height:"48%",
        alignItems:"center"
    },
    optionImage:{
        width:"100%",
        flex:1
    },
    selectedContainer:{
        backgroundColor:"#DDF4EE",
        borderColor:"#81D5FE"
    },
    selectedText:{
        fontWeight: "bold",
        color: "#40BEF7"
    },
    optionText:{
        fontWeight: "bold",
        color:"black"
    },
   
})

export default styles;