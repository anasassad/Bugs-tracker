export interface Issue {
  issueNo : number ;
  title : string ;
  description : string ;
  priority : 'low' | 'high' ;
  type : 'Bug' | 'Documentation' | 'Feature';
  completed? : boolean ;
}
