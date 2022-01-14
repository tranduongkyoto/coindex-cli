# Coindex CLI

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://coinmarketcap.com/api/

Author: Brad Traversy

Source: https://www.youtube.com/watch?v=-6OAHsde15E&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=31

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V
```

![coin2](https://user-images.githubusercontent.com/58038892/149517600-4014e229-c58a-4294-844c-55b13dbe21bf.JPG)

```
# API Key Commands
coindex key set
coindex key show
coindex key remove

```

![Inkedcoin1_LI](https://user-images.githubusercontent.com/58038892/149517840-e2a34c74-4f57-4bc9-bfae-f2dfaba1f9b5.jpg)

```
# Crypto Check Commands
coindex check price (default: BTC,ETH,DOT)

# Check Specific Coins 
coindex check price --coin=FTT
coindex check price --coin=ADA,FTT,LINK

# Choose Currency (Default: USD)
coindex check price --cur=VND

```

![coin3](https://user-images.githubusercontent.com/58038892/149517846-901ce659-d3f5-45c5-b784-02bc33181f67.JPG)

 
### Version

1.0.0

### License

MIT
