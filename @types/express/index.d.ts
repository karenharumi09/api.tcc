declare namespace Express{
    export interface Request{
        user_id: string;
        
    }
}


declare namespace Express{
    declare namespace Multer {
        export interface File{
            location: string;
        }
    }
}