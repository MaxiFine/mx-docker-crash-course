# Prometheus & Grafana Monitoring Setup

A Docker Compose setup for monitoring containers using Prometheus, Grafana, cAdvisor, and Node Exporter.

## Services

- **Prometheus** (port 9090) - Metrics collection and storage
- **Grafana** (port 3000) - Metrics visualization dashboards
- **cAdvisor** (port 8081) - Container metrics
- **Node Exporter** (port 9100) - Host system metrics
- **Nginx Exporter** (port 9113) - Nginx metrics

## Quick Start

```powershell
# Start all services
docker-compose -f .\docker-compose-type-1.yml up -d

# Check container status
docker ps

# Stop all services
docker-compose -f .\docker-compose-type-1.yml down

# Stop and remove volumes (clean slate)
docker-compose -f .\docker-compose-type-1.yml down -v
```

## Initial Setup - Step by Step

### Step 1: Start the Services

```powershell
docker-compose -f .\docker-compose-type-1.yml up -d
```

Wait 30-60 seconds for all services to start and begin collecting metrics.

### Step 2: Verify Services are Running

```powershell
docker ps
```

All 5 containers should show status "Up".

### Step 3: Configure Grafana Data Source

1. Open Grafana in your browser: http://localhost:3000
2. Login with default credentials:
   - Username: `admin`
   - Password: `admin`
3. Navigate to **Connections** → **Data Sources** (or use the gear icon ⚙️)
4. Click **Add data source**
5. Select **Prometheus**
6. Configure the data source:
   - **Name**: `Prometheus` (or any name you prefer)
   - **URL**: `http://prometheus:9090`
   - Leave other settings as default
7. Click **Save & Test**
   - You should see a green success message: "Data source is working"

### Step 4: Import Docker Monitoring Dashboard

1. In Grafana, go to **Dashboards** → **Import** (or click the + icon)
2. Enter dashboard ID: `893`
3. Click **Load**
4. Select your Prometheus data source from the dropdown
5. Click **Import**

The dashboard should now display all metrics including:
- Container uptime, CPU, memory, disk, swap
- Network traffic per container
- System load and available memory

## Troubleshooting

### Issue: Dashboard Shows "N/A" or "No data"

**Cause**: Prometheus data corruption from previous runs or data source not configured.

**Solution**:

```powershell
# Step 1: Stop and clean everything
docker-compose -f .\docker-compose-type-1.yml down -v

# Step 2: Start fresh
docker-compose -f .\docker-compose-type-1.yml up -d

# Step 3: Wait 60 seconds for data collection to begin

# Step 4: Reconfigure Grafana data source (see Step 3 above)

# Step 5: Re-import dashboard 893 (see Step 4 above)
```

### Issue: "Post http://prometheus:9090/api/v1/query: no such host"

**Cause**: Grafana cannot resolve the Prometheus hostname.

**Solution**: 
1. Ensure all services are on the same Docker network (already configured in docker-compose-type-1.yml)
2. Restart the services:
   ```powershell
   docker-compose -f .\docker-compose-type-1.yml restart
   ```
3. Delete and reconfigure the Prometheus data source in Grafana

### Issue: Port 8080 Already in Use (Jenkins conflict)

**Solution**: Already resolved - cAdvisor uses port 8081 on host, but internally still uses 8080.

### Issue: Prometheus Logs Show "out-of-order samples"

**Cause**: Old Prometheus data with timestamp conflicts.

**Solution**: Clean volumes and restart (see first troubleshooting solution above)

### Verify Prometheus Targets

1. Open Prometheus: http://localhost:9090
2. Go to **Status** → **Targets**
3. All targets should show state "UP":
   - cadvisor (http://cadvisor:8080/metrics)
   - node-exporter (http://node-exporter:9100/metrics)
   - nginx-exporter (http://nginx-exporter:9113/metrics)
   - prometheus (http://localhost:9090/metrics)

### Test Connectivity Between Containers

```powershell
# Test if Prometheus can reach cAdvisor
docker exec prometheus wget -qO- http://cadvisor:8080/metrics | Select-Object -First 5

# Test if Grafana can reach Prometheus
docker exec grafana wget -qO- http://prometheus:9090/api/v1/status/config
```

## Configuration Files

- `docker-compose-type-1.yml` - Docker Compose service definitions
- `prometheus.yml` - Prometheus scrape configuration

## Network Architecture

All services run on a custom bridge network called `monitoring`, allowing them to communicate using container names as hostnames.

## Accessing Services

- **Grafana**: http://localhost:3000 (admin/admin)
- **Prometheus**: http://localhost:9090
- **cAdvisor**: http://localhost:8081
- **Node Exporter**: http://localhost:9100/metrics
- **Nginx Exporter**: http://localhost:9113/metrics

## Notes

- **Windows/WSL2**: This setup works on Windows with Docker Desktop using WSL2
- **Data Persistence**: Metrics data is stored in Docker volumes (`prometheus_data` and `grafana_data`)
- **Scrape Interval**: Prometheus scrapes metrics every 10 seconds
- **Nginx Exporter**: Currently configured to monitor nginx at `http://nginx:8080/stub_status` (requires nginx container to be running)
