import yaml
from splunklib.client import connect

def main():
    opts = {'host': 'localhost', 'port': '8000', 'username': 'admin', 'password': 'uia6zgNpA2Bxk8tG*k', 'scheme': 'http', 'version': '7.0.2'}
    service = connect(**opts)

    with open('./alerts/autumn-zeus.yaml', 'r') as f:
        doc = yaml.load(f)
    txt = doc["index"]
    print txt


if __name__ == "__main__":
    main()
