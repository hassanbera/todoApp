export class Model{
    user;
    items;
    /**
     *
     */
    constructor() {
        this.user="Hasso";
      this.items=[new TodoItem("Kahvaltı",false),
        new TodoItem("Spor",false),
        new TodoItem("Oyun",true),
        new TodoItem("Sinema",false)];
        
    }
}

export class TodoItem{
     description : string;
     action : boolean;

    constructor(description:string,action:boolean){ {
        this.description=description;
        this.action=action;
    }
}
}