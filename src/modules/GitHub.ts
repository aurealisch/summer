interface Opts {
  owner: string;
  repo: string;
  path: string;
}

interface GitHubRepoContent {
  path: string;
  download_url: string;
  content: string;
}

export default class GitHub {
  private static baseUrl = "https://api.github.com";

  private static composeGetRepoContentReqUrl(opts: Opts) {
    return `${this.baseUrl}/repos/${opts.owner}/${opts.repo}/contents/${opts.path}`;
  }

  static async get<T>(req: Request): Promise<T> {
    const res = await fetch(req);
    const text = await res.text();

    return JSON.parse(text);
  }

  static async getRepoContent(opts: Opts): Promise<GitHubRepoContent> {
    const req = new Request(this.composeGetRepoContentReqUrl(opts));

    return await this.get<GitHubRepoContent>(req);
  }

  static async getRepoContents(opts: Opts): Promise<Array<GitHubRepoContent>> {
    const req = new Request(this.composeGetRepoContentReqUrl(opts));

    return await this.get<Array<GitHubRepoContent>>(req);
  }
}
