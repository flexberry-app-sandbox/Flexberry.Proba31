docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba3/app ../..
