import { Injectable } from '@angular/core';
import { Entry } from '../../models/entry';
import { Mood } from '../../models/mood';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBU4FhZ_0XJF9-GpUxvRCfXFP14PnANb6o",
  authDomain: "moodtracker-b75bd.firebaseapp.com",
  databaseURL: "https://moodtracker-b75bd.firebaseio.com",
  projectId: "moodtracker-b75bd",
  storageBucket: "moodtracker-b75bd.appspot.com",
  messagingSenderId: "587504295484"
};

@Injectable()
export class EntryDataServiceProvider {
  private entries: Entry[] = [];
  private serviceObserver: Subject<any>;
  private clientObservable: Subject<any>;
  private serviceSubject: Subject<any>;
  private db: any;

  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();
    console.log('test service constructor');
    // this.clientObservable = Observable.create(observer => {
    //   console.log('test this.clientObservable',  this.clientObservable);
    //   this.serviceObserver = observer;
    // });

    this.clientObservable = new Subject();
    this.serviceObserver = this.clientObservable;
    // this.serviceSubject.next(undefined)
    // this.serviceSubject.subscribe();

    let dataRef = this.db.ref('/entries');
    dataRef.on('value', snapshot => {
        this.entries = [];
        snapshot.forEach(childSnapshot => {
          let entry = {
            id: childSnapshot.key,
            location: childSnapshot.val().location,
            timestamp: childSnapshot.val().timestamp,
            text: childSnapshot.val().text,
            mood: childSnapshot.val().mood,
    };
      this.entries.push(entry);

    });
    this.notifySubscribers();
  });
  }

  public getObservable(): Observable<Entry[]> {
    return this.clientObservable;
  }

  private notifySubscribers(): void {
    this.serviceObserver.next(true);
  }

  public getEntries():Entry[] {
    let entriesClone = JSON.parse(JSON.stringify(this.entries));
    return entriesClone.sort(function(a, b) {
      if (a.timestamp > b.timestamp) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  public getEntryByID(id: any): Entry {
    for (let e of this.entries) {
      if (e.id === id) {
        let clone = JSON.parse(JSON.stringify(e));
        return clone;
      }
    }
    return undefined;
  }

  public getMood(name: string):Mood {
    if (name == "happy") { return new Mood("happy", 100, "/assets/imgs/happy.png", "#F0CF75", "#FFE7A3"); }
    if (name == "angry") { return new Mood("angry", 30, "/assets/imgs/angry.png", "#E6646E", "#E6888D"); }
    if (name == "sad") { return new Mood("sad", 50, "/assets/imgs/sad.png", "#6DBEFF", "#B7DDFF"); }
    if (name == "okay") { return new Mood("okay", 80, "/assets/imgs/okay.png", "#F09C4F", "#F0B077"); }
    return new Mood("happy", 100, "/assets/imgs/Happy-b.png", "#F0CF75", "#FFE7A3"); // if not applied
  }

  public addEntry(entry: Entry): void {
    let listEntry = this.db.ref('/entries');
    let entryRef = listEntry.push();
    let dataRecord = {
      id: entry.id,
      location: entry.location,
      mood: entry.mood,
      text: entry.text,
      timestamp: new Date().toLocaleString()
    }
    console.log('in service, the new entry is', dataRecord)
    entryRef.set(dataRecord);
    this.notifySubscribers();
  }




  public updateEntry(key, newEntry: Entry): void {
    let parentRef = this.db.ref('/entries');
    let childRef = parentRef.child(key);
    let updateRecord = {
      // id: newEntry.id,
      location: newEntry.location,
      mood: newEntry.mood,
      text: newEntry.text,
      timestamp: new Date(newEntry.timestamp).toLocaleString()
    }
    childRef.set(updateRecord);
    this.notifySubscribers();
  }

  public removeEntry(key): void {
    let parentRef = this.db.ref('/entries');
    let childRef = parentRef.child(key);
    childRef.remove();
    this.notifySubscribers();
  }


  public moodCount(moodtype:string) {
    let k : any;
    for(k in this.entries)
    {
       var entry = this.entries[k];
       var mood = moodtype;
       var count = this.entries.filter((obj) => obj.mood === mood).length;
    }
    return count;     
 }


}
