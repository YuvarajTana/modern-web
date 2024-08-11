## Understanding What is clound ?

### Cloud Services 

### Cloud Providers 

### AWS for Front End Engineers 

### Typlical standard cloud architeture for running scalable web application. 

1. DNS Request (Route 53)

    Request: A user initiates a request by entering a domain name (e.g., www.example.com) into their browser.
    Route 53: AWS Route 53, a DNS service, resolves the domain name to an IP address. It determines the location (based on geolocation, latency, etc.) and returns the best IP address to the user.

2. Content Delivery (CloudFront)

    Request: The browser sends the request to the IP address provided by Route 53, which typically points to AWS CloudFront (if it's a content delivery setup).
    CloudFront: CloudFront is a CDN that caches the content closer to the user. If the requested content (e.g., static assets like images, CSS, JS) is cached in a nearby CloudFront edge location:
        Cached Response: CloudFront serves the cached content directly to the user.
        Miss: If the content is not cached, CloudFront forwards the request to the origin server, usually an S3 bucket or EC2 instance.

3. Load Balancer (ELB)

    Request: If the content is dynamic or not available in CloudFront, the request is forwarded to the Elastic Load Balancer (ELB).
    ELB: The ELB distributes incoming application traffic across multiple EC2 instances to ensure fault tolerance and high availability.

4. Application Server (EC2)

    Request: The ELB routes the request to one of the EC2 instances running the web application.
    EC2 Instance: The EC2 instance processes the request. It may involve executing application logic, accessing a database, or generating dynamic content.

5. Static Content (S3)

    Request: If the EC2 instance needs to serve static content (e.g., images, CSS, JS files), it may fetch these from an S3 bucket.
    S3 Bucket: S3 provides scalable storage for static content. The EC2 instance retrieves the necessary files from S3.

6. Database Query (RDS)

    Request: For dynamic content, the EC2 instance may need to query a relational database hosted on AWS RDS (Relational Database Service).
    RDS: The EC2 instance queries the RDS database for the necessary data, such as user information, content data, etc.

7. Response Flow

    From RDS to EC2: The RDS database returns the requested data to the EC2 instance.
    From EC2 to ELB: The EC2 instance processes the data and prepares the response, which is then sent back to the ELB.
    From ELB to CloudFront (if applicable): The response is sent to CloudFront, which may cache it for future requests.
    From CloudFront to User: Finally, the response is sent back to the user’s browser via CloudFront.

8. User Receives the Response

    The user’s browser receives the response and renders the content, completing the request-response cycle.

User -> Route 53 -> CloudFront -> ELB -> EC2 -> RDS
      -> S3 (for static content) 
      <- ELB <- CloudFront <- User
