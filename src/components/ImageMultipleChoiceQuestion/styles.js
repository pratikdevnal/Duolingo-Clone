import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    text:{
        fontSize:20,
        fontWeight:"bold",
        // backgroundColor:'red',
        alignSelf:"stretch"
    },
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
    optionText:{

    },
    optionsContainer:
    { 
        // backgroundColor:"red",
        width:'100%',
        flexDirection:"row",
        flex:1,
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignContent:"space-between"
    }
})

export default styles;