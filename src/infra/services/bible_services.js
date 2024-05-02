
class BibleServices{
	#API = "https://www.abibliadigital.com.br/api";
	#bibleVersion;
	#VERSE_INDEX = new Date().getDate();
	#DAYLY_VERSES = [
		"sl/23/2",
		"1pe/4/1",
		"1co/4/4",
		"gn/1/1",
		"rm/12/21",
		"sl/41/1",
		"lc/4/16",
		"pv/16/3",
		"sl/31/1",
		"pv/19/17",
		"sl/23/2",
		"1pe/4/1",
		"1co/4/4",
		"gn/1/1",
		"rm/12/21",
		"sl/41/1",
		"lc/4/16",
		"pv/16/3",
		"sl/31/1",
		"pv/19/17",
		"sl/23/2",
		"1pe/4/1",
		"1co/4/4",
		"gn/1/1",
		"rm/12/21",
		"sl/41/1",
		"lc/4/16",
		"pv/16/3",
		"sl/31/1",
		"pv/19/17"
	];
	
	constructor(bibleVersion = "nvi"){
		this.#bibleVersion = bibleVersion;
	}

	async getVerseOfDay(){
		const verseId = this.#DAYLY_VERSES[this.#VERSE_INDEX - 1];
		const response = await fetch(`${this.#API}/verses/nvi/${verseId}`, {
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
			}
		})
			.catch(function(err) {
				console.error(err); 
			});

		const data = await response.json();
		return data;
	}

	async getRandomVerse() {
		const response = await fetch(`${this.#API}/verses/${this.#bibleVersion}/random`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
			.catch(function(err) {
				console.error(err); 
			});
		const data = await response.json();
		return data;
	}
	
	async getBooks() {
		const response = await fetch(`${this.#API}/books`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
			.catch(function(err) {
				console.error(err); 
			});
		const data = await response.json();
		return data;
	}

}


export default BibleServices;
