const app = new Vue({
    

    el: '#app',
    data:{

        user:
        {
            name: 'Nome utente',
            avatar: 'assets/img/avatar_7.jpg'
        },
        now:dayjs().format('DD/MM/YY HH:mm:ss') ,
        counterContact: 0,
        messAggiunto: '',
        nomeCercato: '',
        ultimoAccesso: '',
        
        
      

        contacts: [
            {
                name: 'Michele',
                avatar: 'assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]

    },
    methods:{
        


      addMess(){
        
               this.contacts.forEach((contact,index)=>{
                   let {messages}=contact;
                   if(index===this.counterContact && this.messAggiunto.length>0){
                       messages.push(
                           {
                               date:dayjs().format('DD/MM/YY HH:mm:ss'),
                               text:this.messAggiunto,
                               status:'sent'
                           }
                           
                       )
                       this.messAggiunto='';
                       setTimeout(function(){
                            messages.push(
                                {
                                    date:dayjs().format('DD/MM/YY HH:mm:ss'),
                                    text:'Ok!!!!',
                                    status:'received'
                                }
                            )
                       },1000) 
                   }
               })
        },/* end addMess */

        lastAccess(index){
           let contactMsg = this.contacts[index].messages;
           return contactMsg[contactMsg.length-1].date;
           
           
           
        },/* end lastAccess */

        lastMessage(index){
             let contactLastMess = this.contacts[index].messages;
             if(contactLastMess[contactLastMess.length-1].text.length>30){
                 let spliceMsg = contactLastMess[contactLastMess.length-1].text.slice(0, 30) + "...";
                 return spliceMsg;
             }
             return contactLastMess[contactLastMess.length-1].text
        }

       


 }/* end methods */

    
});/* end app */

/* this.contacts.forEach((utent)=>{
              if(utent === this.contacts[this.counterContact]){
                utent.messages.forEach((mess,index)=>{
                    if(index === utent.messages.length-1){
                        this.ultimoAccesso = mess.date;
                    }
                })
              }
           })
           return this.ultimoAccesso; */




