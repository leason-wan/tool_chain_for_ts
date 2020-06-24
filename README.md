# tool chain for ts libray

## monorepo
support monorepo by yarn workspace

## generate .d.ts
generate .d.ts by @microsoft/api-extractor


## formats
every package has a buildOptions in package.json.
you can set output format like:

```json
"buildOptions": {
  "formats": ["esm", "cjs", "global"]
}
```

## TODO

- [ ] suppoort dev server
- [ ] more monorepo feature ???