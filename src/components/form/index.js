import React, {useState} from "react"
import { TextInput,Text, View, Button } from "react-native"
import ResultImc from "./ResultImc";



export default function Form(){

//criando estado para peso,altura, valor imc
const [height,setHeight] = useState(null)
const [weight,setWeight] = useState(null)
const [messageImc,setMessageImc] = useState("preencha o pesoa e a altura")
const [imc,setImc] = useState(null)
const [textButton,setTextButton] = useState("Calcular")



    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex.: 1.75" keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput  placeholder="Ex.: 65kg" keyboardType="numeric"></TextInput>
                <Button title="Calcular IMC"/>
            </View>
           <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}