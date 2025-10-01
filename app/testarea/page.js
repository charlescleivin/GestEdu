import Navbar from "@/components/nav/appNavBar";
import Header from "@/components/header/header"
import TableFather from "@/components/tableFather/tableFather";


export default function About() {

  const schoolData = [
    { id: 1, title: "Escola Municipal Santos Dumont", type: "students" },



    { id: 2, 
      title: "Educandario Monteiro Lobato",
      type: "attendance",
      schoolData: [
        {
            "ano": "Primeiro Ano",
        },
        {
            "ano": "Segundo Ano",
        },   
        {
            "ano": "Terceiro Ano",
        },   
             
    ] 


    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        
        
        <Header />
        <Navbar isAdmin={true} /> 
        <TableFather data={schoolData} />
 




        <p>hello</p>
    </div>
  );
}