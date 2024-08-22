
1.
 run nonuser:
kubectl get pods -n node-app 
kubectl exec -it <node-app-pod-name> -- /bin/sh
whoami

***************
kubectl exec -it node-app-8b8679c9d-xyz -- /bin/sh
whoami
get -> 1001000000
****************

3. docker run -d -p 8080:8080 -v $(pwd)/views:/app/views sdikman/node-app
    we can add also to Deployment:      
        volumes:
        - name: views-volume
          hostPath:
            path: /path/to/your/local/views
            type: Directory
OpenShift:
1.
see welcome:
http://node-app-node-app.apps.cluster-n4652.n4652.sandbox2938.opentlc.com/
2. 
kubectl get all --namespace  node-app
NAME                           READY   STATUS    RESTARTS   AGE
pod/mongodb-65d6d8cc44-7kpz9   1/1     Running   0          152m
pod/node-app-8b8679c9d-tstns   1/1     Running   0          41m

NAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
service/mongodb    ClusterIP   172.30.251.231   <none>        27017/TCP   152m
service/node-app   ClusterIP   172.30.39.119    <none>        8080/TCP    41m

NAME                       READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/mongodb    1/1     1            1           152m
deployment.apps/node-app   1/1     1            1           41m

NAME                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/mongodb-65d6d8cc44   1         1         1       152m
replicaset.apps/node-app-8b8679c9d   1         1         1       41m

NAME                                HOST/PORT                                                            PATH   SERVICES   PORT   TERMINATION   WILDCARD
route.route.openshift.io/node-app   node-app-node-app.apps.cluster-n4652.n4652.sandbox2938.opentlc.com          node-app   8080                 None
3. connect pod to mongoDb :
 kubectl exec -it mongodb-65d6d8cc44-7kpz9 -- mongosh

 use mydatabase
switched to db mydatabase
mydatabase> db.users.insert({ name: "John Doe", age: 30 })
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('66c125669cdc451c975e739c') }
}
mydatabase> db.users.insert({ name: "Jane Smith", age: 25 })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('66c125669cdc451c975e739d') }
}
mydatabase>


http://node-app-node-app.apps.cluster-n4652.n4652.sandbox2938.opentlc.com/users#   m y _ w e b _ s e r v e r  
 