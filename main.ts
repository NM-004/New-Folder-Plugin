import {Plugin,TFolder} from 'obsidian';

export default class NewFolderPlugin extends Plugin{
	async onload(){
		this.addRibbonIcon('folder','new-folder',async()=>{
			await this.app.vault.createFolder("New-Folder") as TFolder;
		})
	}
}